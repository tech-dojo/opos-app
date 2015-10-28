describe('Controllers', function(){
    var scope,controller;


    // load the controller's module
  /* beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });
});*/

// describe('Service: Authentication', function () {

//   // load the service's module
//   beforeEach(module('starter.controllers'));

//   // instantiate service

//   var _myService;
// beforeEach(inject(['Authentication.user', function (Authentication) {
//     _myService = myService;
// }]));

//   it('should do something', function () {
//     expect(!!_myService).toBe(true);
//   });

// });




describe('ControllersLogIn', function(){
   // var  scope,http,location,authentication,controller;
   var controller,
            scope,
            $httpBackend,
            $location;

    // load the controller's module
    beforeEach(module('starter.controllers','starter.services'));

    beforeEach(inject(function($controller,$rootScope,$location,_$httpBackend_){
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        // service = $injector.get('Authentication');
   controller =      $controller('DashCtrl', {$scope:scope});

    }));
           
    // tests start here
    it('signin function has been called and is a success', function(){
  /* scope.credentials ={
      username: 'admin',
      password: 'opos1234'
    };*/
    $httpBackend.expectPOST('http://opos.tech-dojo.org/auth/signin').respond(200, 'Fred'); //Fake
    scope.signin();
    $httpBackend.flush();

    console.log(scope.authentication);
    expect(scope.authentication.user).toEqual('Fred');
 
    });
});