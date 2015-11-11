describe('ControllersLogIn', function() {
    // var  scope,http,location,authentication,controller;
    var controller,
        scope,
        $httpBackend,
        $location;

    // load the controller's module
    beforeEach(module('starter.controllers', 'starter.services'));

    beforeEach(inject(function($controller, $rootScope, $location, _$httpBackend_) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        // service = $injector.get('Authentication');
        controller = $controller('SignInCtrl', {
            $scope: scope
        });

    }));

    // tests start here
    it('$scope.signin() should work with correct data', function() {

        $httpBackend.expectPOST('http://opos.tech-dojo.org/auth/signin').respond(200, 'Fred'); //Fake
        scope.signin();
        $httpBackend.flush();

        console.log(scope.authentication);
        expect(scope.authentication.user).toEqual('Fred');

    });

    it('$scope.signin() should fail to log in with nothing', function() {
            // Test expected POST request
            $httpBackend.expectPOST('http://opos.tech-dojo.org/auth/signin').respond(400, {
                'message': 'Missing credentials'
            });

            scope.signin();
            $httpBackend.flush();

            // Test scope value
            expect(scope.error).toEqual('Missing credentials');
        });

        it('$scope.signin() should fail to log in with wrong credentials', function() {
            // Foo/Bar combo assumed to not exist
            scope.authentication.user = 'Foo';
            scope.credentials = 'Bar';

            // Test expected POST request
            $httpBackend.expectPOST('http://opos.tech-dojo.org/auth/signin').respond(400, {
                'message': 'Unknown user'
            });

            scope.signin();
            $httpBackend.flush();

            // Test scope value
            expect(scope.error).toEqual('Unknown user');
        });


  

});