describe('ControllersOrder', function() {
    beforeEach(module('starter.controllers', 'starter.services'));
    var controller,
        scope,
        $httpBackend,
        $location;
    beforeEach(inject(function($controller, $rootScope, $location, _$httpBackend_) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        // service = $injector.get('Authentication');
        controller = $controller('OrderCtrl', {
            $scope: scope
        });
      
    }))

    it('should be able to get a list of Orders if signed in', function() {
        // Create new Order model instance

        var k = [{"_id":"562ba0adc21e040b000dbdca","__v":0,"user":null,"created":"2015-10-24T15:15:57.269Z","totalPrice":7750,"offerCode":"","orderList":[{"fooditem":"56232ac7f0aed60b009e49e9","quantity":2,"_id":"562ba0adc21e040b000dbdd5"},{"fooditem":"56205b1da1da660b005858be","quantity":1,"_id":"562ba0adc21e040b000dbdd4"},{"fooditem":"56205a71a1da660b005858bd","quantity":1,"_id":"562ba0adc21e040b000dbdd3"},{"fooditem":"5615a81c19a6fb0b00ce1bb7","quantity":3,"_id":"562ba0adc21e040b000dbdd2"},{"fooditem":"5620595ca1da660b005858bc","quantity":2,"_id":"562ba0adc21e040b000dbdd1"},{"fooditem":"5615a66719a6fb0b00ce1bb4","quantity":1,"_id":"562ba0adc21e040b000dbdd0"},{"fooditem":"5615a60b19a6fb0b00ce1bb3","quantity":1,"_id":"562ba0adc21e040b000dbdcf"},{"fooditem":"5615a6ff19a6fb0b00ce1bb5","quantity":1,"_id":"562ba0adc21e040b000dbdce"},{"fooditem":"5615a59619a6fb0b00ce1bb2","quantity":1,"_id":"562ba0adc21e040b000dbdcd"},{"fooditem":"5615a7c119a6fb0b00ce1bb6","quantity":1,"_id":"562ba0adc21e040b000dbdcc"},{"setMenu":"5615a84e19a6fb0b00ce1bb8","quantity":1,"_id":"562ba0adc21e040b000dbdcb"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"","preferredTime":null},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"","customerName":""}},{"_id":"56288369dd6d940b00ca8828","__v":0,"user":null,"created":"2015-10-22T06:34:17.078Z","totalPrice":720,"offerCode":"","orderList":[{"fooditem":"56205b1da1da660b005858be","quantity":1,"_id":"56288369dd6d940b00ca882b"},{"fooditem":"5620595ca1da660b005858bc","quantity":1,"_id":"56288369dd6d940b00ca882a"},{"fooditem":"5615a66719a6fb0b00ce1bb4","quantity":1,"_id":"56288369dd6d940b00ca8829"}],"status":"Pending","instruction":"Please send us details if any changes.","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"2","preferredTime":"2015-11-25T06:00:00.000Z"},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"eee@gmail.com","customerPhone":"1234567","customerName":"Erin"}},{"_id":"562632fed2110b0b00785ddb","user":{"_id":"561560b86619ab0b00b0d200","displayName":"Admin Test"},"__v":0,"created":"2015-10-20T12:26:38.648Z","totalPrice":2700,"offerCode":"","orderList":[{"fooditem":"56232ac7f0aed60b009e49e9","quantity":10,"_id":"562632fed2110b0b00785ddd"},{"fooditem":"56205b1da1da660b005858be","quantity":3,"_id":"562632fed2110b0b00785ddc"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"","preferredTime":null},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"","customerName":""}},{"_id":"561634417c49240b001fdc8d","__v":0,"user":null,"created":"2015-10-08T09:15:45.885Z","totalPrice":1000,"offerCode":"","orderList":[{"fooditem":"5615a7c119a6fb0b00ce1bb6","quantity":1,"_id":"561634417c49240b001fdc8e"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"6","preferredTime":"2015-10-15T06:00:00.000Z"},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"3","customerName":"s"}},{"_id":"561632a57c49240b001fdc8b","__v":0,"user":null,"created":"2015-10-08T09:08:53.208Z","totalPrice":800,"offerCode":"","orderList":[{"fooditem":"5615a81c19a6fb0b00ce1bb7","quantity":1,"_id":"561632a57c49240b001fdc8c"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"","preferredTime":null},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"","customerName":"Cust 1"}},{"_id":"56161c34c8cc1e0b001a87f8","__v":0,"user":null,"created":"2015-10-08T07:33:08.577Z","totalPrice":3320,"offerCode":"","orderList":[{"fooditem":"5615a81c19a6fb0b00ce1bb7","quantity":4,"_id":"56161c34c8cc1e0b001a87fa"},{"fooditem":"5615a60b19a6fb0b00ce1bb3","quantity":1,"_id":"56161c34c8cc1e0b001a87f9"}],"status":"Pending","instruction":"Moricjh ! Dozone","orderType":{"delivery":{"address":"Dhaaka","preferredTime":"2015-10-09T06:00:00.000Z"},"reservation":{"personCount":"","preferredTime":null},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"s@g.com","customerPhone":"01010","customerName":"Shazzad"}},{"_id":"561618b136e29c0b00a492e3","__v":0,"user":null,"created":"2015-10-08T07:18:09.303Z","totalPrice":9250,"offerCode":"","orderList":[{"fooditem":"5615a81c19a6fb0b00ce1bb7","quantity":5,"_id":"561618b136e29c0b00a492e6"},{"fooditem":"5615a7c119a6fb0b00ce1bb6","quantity":3,"_id":"561618b136e29c0b00a492e5"},{"fooditem":"5615a59619a6fb0b00ce1bb2","quantity":9,"_id":"561618b136e29c0b00a492e4"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"","preferredTime":null},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"","customerName":"Cust 2"}},{"_id":"5615b50e33dd7b0b00fad667","__v":0,"user":null,"created":"2015-10-08T00:13:02.776Z","totalPrice":2200,"offerCode":"","orderList":[{"setMenu":"5615a84e19a6fb0b00ce1bb8","quantity":1,"_id":"5615b50e33dd7b0b00fad668"}],"status":"Pending","instruction":"","orderType":{"delivery":{"preferredTime":null},"reservation":{"personCount":"5","preferredTime":"2015-10-07T19:00:00.000Z"},"pickup":{"preferredTime":null}},"customerInfo":{"customerEmail":"","customerPhone":"Test","customerName":"Test"}}]


        

    $httpBackend.expectGET('http://opos.tech-dojo.org/orders').respond(200, k); //Fake
    //scope.signin();
    $httpBackend.flush();
    console.log ('Hello Orders 2 ' +scope.orders[5].totalPrice);

    //console.log(scope.authentication);
    expect(scope.orders[5].totalPrice).toEqual(3320);
 
    });

});