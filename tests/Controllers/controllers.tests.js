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
        controller = $controller('DashCtrl', {
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


    it('generateReport function has been called and has returned data successfully', function() {


        var report = [{
            "title": "Beef Steak",
            "quantity": 4,
            "price": 4000
        }, {
            "title": "Chicken Steak",
            "quantity": 10,
            "price": 8000
        }, {
            "title": "Chef's Special Salad",
            "quantity": 1,
            "price": 120
        }, {
            "title": "Turkey & Cheese",
            "quantity": 9,
            "price": 2250
        }, {
            "title": "Meat & Greens",
            "quantity": 1,
            "price": 2200
        }];

        var startTime = new Date("Sat Oct 03 2015 00:00:00");

      //  startTime = JSON.stringify(startTime);
        console.log("starttime : " + startTime);


        var endTime = new Date("Sat Oct 13 2015 00:00:00");
       // console.log("endtime : " +endTime);
     //   endTime = JSON.stringify(endTime);
        console.log(startTime);
        console.log(endTime);

scope.start = startTime;
scope.end = endTime;


        $httpBackend.expectGET('http://opos.tech-dojo.org/getOrdersFromDate?0=' 
        + scope.start + '&1=' +scope.end).respond(200, report); //Fake

     scope.generateReport();

        $httpBackend.flush();

        //console.log(scope.reportData);
var price = scope.reportData[4].price;
       console.log(price);

         expect(price).toEqual(2200);

    });

 it('Show error message if the date range is wrong', function() {

        var startTime = new Date("Sat Oct 13 2015 00:00:00");

      //  startTime = JSON.stringify(startTime);
        console.log("starttime : " + startTime);


        var endTime = new Date("Sat Oct 03 2015 00:00:00");
       // console.log("endtime : " +endTime);
     //   endTime = JSON.stringify(endTime);
        console.log(startTime);

        console.log(endTime);

        scope.start = startTime; 
        scope.end = endTime;

        // $httpBackend.expectGET('http://opos.tech-dojo.org/getOrdersFromDate?0=' 
        // + startTime + '&1=' +endTime).respond(400, report); //Fake

     scope.generateReport();
     
 var wrongDateRangeErrorMessage = 'incorrect date range';
        

         expect(scope.wrongDateRange).toEqual(wrongDateRangeErrorMessage);

    });



});