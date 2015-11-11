describe('ControllersOrder', function () {
    beforeEach(module('starter.controllers', 'starter.services'));
    var controller,
            scope,
            $httpBackend,
            $location, stateParams;
    beforeEach(inject(function ($controller, $rootScope, $location, _$httpBackend_) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        stateParams = {orderId: '56288369dd6d940b00ca8828'};
        controller = $controller('OrderCtrl', {
            $scope: scope,
            $stateParams: stateParams
        });

    }))

    it('should be able to get a list of Orders', function () {
        // Create new Order List model instance

        var k = [{"_id": "562ba0adc21e040b000dbdca", "__v": 0, "user": null, "created": "2015-10-24T15:15:57.269Z", "totalPrice": 7750, "offerCode": "", "orderList": [{"fooditem": "56232ac7f0aed60b009e49e9", "quantity": 2, "_id": "562ba0adc21e040b000dbdd5"}, {"fooditem": "56205b1da1da660b005858be", "quantity": 1, "_id": "562ba0adc21e040b000dbdd4"}, {"fooditem": "56205a71a1da660b005858bd", "quantity": 1, "_id": "562ba0adc21e040b000dbdd3"}, {"fooditem": "5615a81c19a6fb0b00ce1bb7", "quantity": 3, "_id": "562ba0adc21e040b000dbdd2"}, {"fooditem": "5620595ca1da660b005858bc", "quantity": 2, "_id": "562ba0adc21e040b000dbdd1"}, {"fooditem": "5615a66719a6fb0b00ce1bb4", "quantity": 1, "_id": "562ba0adc21e040b000dbdd0"}, {"fooditem": "5615a60b19a6fb0b00ce1bb3", "quantity": 1, "_id": "562ba0adc21e040b000dbdcf"}, {"fooditem": "5615a6ff19a6fb0b00ce1bb5", "quantity": 1, "_id": "562ba0adc21e040b000dbdce"}, {"fooditem": "5615a59619a6fb0b00ce1bb2", "quantity": 1, "_id": "562ba0adc21e040b000dbdcd"}, {"fooditem": "5615a7c119a6fb0b00ce1bb6", "quantity": 1, "_id": "562ba0adc21e040b000dbdcc"}, {"setMenu": "5615a84e19a6fb0b00ce1bb8", "quantity": 1, "_id": "562ba0adc21e040b000dbdcb"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "", "preferredTime": null}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "", "customerName": ""}}, {"_id": "56288369dd6d940b00ca8828", "__v": 0, "user": null, "created": "2015-10-22T06:34:17.078Z", "totalPrice": 720, "offerCode": "", "orderList": [{"fooditem": "56205b1da1da660b005858be", "quantity": 1, "_id": "56288369dd6d940b00ca882b"}, {"fooditem": "5620595ca1da660b005858bc", "quantity": 1, "_id": "56288369dd6d940b00ca882a"}, {"fooditem": "5615a66719a6fb0b00ce1bb4", "quantity": 1, "_id": "56288369dd6d940b00ca8829"}], "status": "Pending", "instruction": "Please send us details if any changes.", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "2", "preferredTime": "2015-11-25T06:00:00.000Z"}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "eee@gmail.com", "customerPhone": "1234567", "customerName": "Erin"}}, {"_id": "562632fed2110b0b00785ddb", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-20T12:26:38.648Z", "totalPrice": 2700, "offerCode": "", "orderList": [{"fooditem": "56232ac7f0aed60b009e49e9", "quantity": 10, "_id": "562632fed2110b0b00785ddd"}, {"fooditem": "56205b1da1da660b005858be", "quantity": 3, "_id": "562632fed2110b0b00785ddc"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "", "preferredTime": null}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "", "customerName": ""}}, {"_id": "561634417c49240b001fdc8d", "__v": 0, "user": null, "created": "2015-10-08T09:15:45.885Z", "totalPrice": 1000, "offerCode": "", "orderList": [{"fooditem": "5615a7c119a6fb0b00ce1bb6", "quantity": 1, "_id": "561634417c49240b001fdc8e"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "6", "preferredTime": "2015-10-15T06:00:00.000Z"}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "3", "customerName": "s"}}, {"_id": "561632a57c49240b001fdc8b", "__v": 0, "user": null, "created": "2015-10-08T09:08:53.208Z", "totalPrice": 800, "offerCode": "", "orderList": [{"fooditem": "5615a81c19a6fb0b00ce1bb7", "quantity": 1, "_id": "561632a57c49240b001fdc8c"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "", "preferredTime": null}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "", "customerName": "Cust 1"}}, {"_id": "56161c34c8cc1e0b001a87f8", "__v": 0, "user": null, "created": "2015-10-08T07:33:08.577Z", "totalPrice": 3320, "offerCode": "", "orderList": [{"fooditem": "5615a81c19a6fb0b00ce1bb7", "quantity": 4, "_id": "56161c34c8cc1e0b001a87fa"}, {"fooditem": "5615a60b19a6fb0b00ce1bb3", "quantity": 1, "_id": "56161c34c8cc1e0b001a87f9"}], "status": "Pending", "instruction": "Moricjh ! Dozone", "orderType": {"delivery": {"address": "Dhaaka", "preferredTime": "2015-10-09T06:00:00.000Z"}, "reservation": {"personCount": "", "preferredTime": null}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "s@g.com", "customerPhone": "01010", "customerName": "Shazzad"}}, {"_id": "561618b136e29c0b00a492e3", "__v": 0, "user": null, "created": "2015-10-08T07:18:09.303Z", "totalPrice": 9250, "offerCode": "", "orderList": [{"fooditem": "5615a81c19a6fb0b00ce1bb7", "quantity": 5, "_id": "561618b136e29c0b00a492e6"}, {"fooditem": "5615a7c119a6fb0b00ce1bb6", "quantity": 3, "_id": "561618b136e29c0b00a492e5"}, {"fooditem": "5615a59619a6fb0b00ce1bb2", "quantity": 9, "_id": "561618b136e29c0b00a492e4"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "", "preferredTime": null}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "", "customerName": "Cust 2"}}, {"_id": "5615b50e33dd7b0b00fad667", "__v": 0, "user": null, "created": "2015-10-08T00:13:02.776Z", "totalPrice": 2200, "offerCode": "", "orderList": [{"setMenu": "5615a84e19a6fb0b00ce1bb8", "quantity": 1, "_id": "5615b50e33dd7b0b00fad668"}], "status": "Pending", "instruction": "", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "5", "preferredTime": "2015-10-07T19:00:00.000Z"}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "", "customerPhone": "Test", "customerName": "Test"}}]




        $httpBackend.expectGET('http://opos.tech-dojo.org/orders').respond(200, k); //Fake

        scope.getOrderList();
        $httpBackend.flush();

        expect(scope.orders[5].totalPrice).toEqual(3320);

    });


    it('should be able to get a Order By ID', function () {
        // Create new Order model instance

        var i = {"_id": "56288369dd6d940b00ca8828", "__v": 1, "created": "2015-10-22T06:34:17.078Z", "totalPrice": 3040, "offerCode": "", "orderList": [{"fooditem": "56205b1da1da660b005858be", "quantity": 1, "_id": "56288369dd6d940b00ca882b"}, {"fooditem": "5620595ca1da660b005858bc", "quantity": 2, "_id": "56288369dd6d940b00ca882a"}, {"fooditem": "5615a66719a6fb0b00ce1bb4", "quantity": 1, "_id": "56288369dd6d940b00ca8829"}, {"setMenu": "5615a84e19a6fb0b00ce1bb8", "quantity": 1, "_id": "564068630496e70b008a9e5a"}], "status": "Pending", "instruction": "Please send us details if any changes.", "orderType": {"delivery": {"preferredTime": null}, "reservation": {"personCount": "2", "preferredTime": "2015-11-25T06:00:00.000Z"}, "pickup": {"preferredTime": null}}, "customerInfo": {"customerEmail": "eee@gmail.com", "customerPhone": "1234567", "customerName": "Erin"}};

        $httpBackend.expectGET('http://opos.tech-dojo.org/orders/' + stateParams.orderId).respond(200, i);

        scope.getSorders();
        $httpBackend.flush();
        expect(scope.sorder.customerInfo.customerName).toEqual('Erin');

    });

    it('should be able to get a list of FoodItmes', function () {
        // Create new Order model instance
        var j = [{"_id": "56232ac7f0aed60b009e49e9", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-18T05:14:47.639Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/Chicken+Skewers.jpg", "category": "Appetizer", "price": 120, "description": "BBQ Chicken pieces on a stick with vegetables", "title": "Chicken Skewer"}, {"_id": "56205b1da1da660b005858be", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-16T02:04:13.851Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/grilled+salmon+steak.jpg", "category": "Steak", "price": 500, "description": "Fresh caught salmon grilled to your liking", "title": "Grilled Salmon Steak"}, {"_id": "56205a71a1da660b005858bd", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-16T02:01:21.744Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/fresh+baguette.jpg", "category": "Sandwich", "price": 300, "description": "Fresh baguette, spicy beef salami, and cheddar cheese slices", "title": "Spicy Beef Baguette"}, {"_id": "5620595ca1da660b005858bc", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-16T01:56:44.398Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/spinach+soup+and+bread.jpg", "category": "Appetizer", "price": 120, "description": "Healthy and tasty - creamy spinach soup", "title": "Spinach Soup"}, {"_id": "5615a81c19a6fb0b00ce1bb7", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:17:48.454Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/photo-1432139555190-58524dae6a55.jpeg", "category": "Steak", "price": 800, "description": "Chicken glazed in honey, comes with a side of greens.\nCooked rare, medium-rare and well-done.", "title": "Chicken Steak"}, {"_id": "5615a7c119a6fb0b00ce1bb6", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:16:17.673Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/photo-1432139509613-5c4255815697.jpeg", "category": "Steak", "price": 1000, "description": "Cooked rare, medium-rare and well-done.", "title": "Beef Steak"}, {"_id": "5615a6ff19a6fb0b00ce1bb5", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:13:03.201Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/photo-1429012178110-d7a734a56176.jpeg", "category": "Sandwich", "price": 400, "description": "Sautéed tilapia strips in a brown whole wheat bread - comes with a side of greens.", "title": "Tilapia Brown Wheat"}, {"_id": "5615a66719a6fb0b00ce1bb4", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:10:31.357Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/photo-1426869981800-95ebf51ce900.jpeg", "category": "Appetizer", "price": 100, "description": "Organic chicken wings (6) fried in a special batter.", "title": "Fried Chicken Wings"}, {"_id": "5615a60b19a6fb0b00ce1bb3", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:08:59.400Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/oMRKkMc4RSq7N91OZl0O_IMG_8309.jpg", "category": "Appetizer", "price": 120, "description": "All seasonal greens and colors from our garden with a balsamic vinaigrette dressing.", "title": "Chef's Special Salad"}, {"_id": "5615a59619a6fb0b00ce1bb2", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 0, "created": "2015-10-07T23:07:02.042Z", "availability": true, "imageUrl": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/jCCsCae7RwCDOKTCA2Ji_reggeli+-+sonka%CC%81s+szendvics.jpeg", "category": "Sandwich", "price": 250, "description": "Fresh baked bread, thin sliced turkey, a slice of cheddar and our special sauce - enough said!", "title": "Turkey & Cheese"}];


        $httpBackend.expectGET('http://opos.tech-dojo.org/fooditems').respond(200, j);

        scope.getFoodList();
        $httpBackend.flush();
        expect(scope.fooditems[1].title).toEqual('Grilled Salmon Steak');

    });

    it('should be able to get a list of SetMenus', function () {
        // Create new Order model instance
        var l = [{"_id": "5615a84e19a6fb0b00ce1bb8", "user": {"_id": "561560b86619ab0b00b0d200", "displayName": "Admin Test"}, "__v": 1, "created": "2015-10-07T23:18:38.151Z", "availability": true, "image": "https://s3-us-west-2.amazonaws.com/techdojo-web/food/photo-1432139509613-5c4255815697.jpeg", "price": 2200, "foodItemList": [{"fooditem": "5615a7c119a6fb0b00ce1bb6", "quantity": 1, "_id": "5615a84e19a6fb0b00ce1bbb"}, {"fooditem": "5615a81c19a6fb0b00ce1bb7", "quantity": 1, "_id": "5615a84e19a6fb0b00ce1bba"}, {"fooditem": "5615a60b19a6fb0b00ce1bb3", "quantity": 4, "_id": "5615a84e19a6fb0b00ce1bb9"}, {"fooditem": "5620595ca1da660b005858bc", "quantity": 1, "_id": "564259730a55c00b003854d3"}, {"fooditem": "5615a66719a6fb0b00ce1bb4", "quantity": 1, "_id": "564259730a55c00b003854d2"}], "title": "Meat & Greens"}];

        $httpBackend.expectGET('http://opos.tech-dojo.org/setmenus').respond(200, l);

        scope.getSetMenuList();
        $httpBackend.flush();
        expect(scope.setmenus[0].title).toEqual('Meat & Greens');

    });


});