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
    it('signin function has been called and is a success', function() {

        $httpBackend.expectPOST('http://opos.tech-dojo.org/auth/signin').respond(200, 'Fred'); //Fake
        scope.signin();
        $httpBackend.flush();

        console.log(scope.authentication);
        expect(scope.authentication.user).toEqual('Fred');

    });


    it('generateReport function has been called and has returned data', function() {


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

        $httpBackend.expectGET('http://opos.tech-dojo.org/getOrdersFromDate?0=' + startTime + '&1=' +endTime).respond(200, report); //Fake

     scope.generateReport();

        $httpBackend.flush();

        //console.log(scope.reportData);
var price = scope.reportData[4].price;
       console.log(price);

         expect(price).toEqual(2200);

    });


});