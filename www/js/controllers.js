angular.module('starter.controllers', [])

.controller('SignInCtrl', ['$scope', '$http', '$location', 'Authentication',
    function($scope, $http, $location, Authentication) {

        $scope.authentication = Authentication;

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.signin = function() {

            $http.post('http://opos.tech-dojo.org/auth/signin', $scope.credentials).success(function(response) {
                // If successful we assign the response to the global user model
                $scope.authentication.user = response;

                // And redirect to the index page
                $location.path('/view');
                $scope.success = true;

            }).error(function(response) {
                $scope.error = response.message;

                $scope.success = false;

            });
        };

    }
])

//--------------------------Order Create Controller Starts--------------------//

.controller('OrderCtrl', function($scope, $http, Authentication, $stateParams) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        
       
        $scope.getSorders = function() {

            $scope.authentication = Authentication;
            $http.get('http://opos.tech-dojo.org/orders/' + $stateParams.orderId).success(function(data) {

                $scope.sorder = data;
            })
        };


        $scope.getOrderList = function() {

            $scope.authentication = Authentication;
            $http.get('http://opos.tech-dojo.org/orders').success(function(data) {
                $scope.orders = data;
            })
        };


        $scope.getFoodList = function() {

            $http.get('http://opos.tech-dojo.org/fooditems').success(function(data) {
                $scope.fooditems = data;
            })
        };

        $scope.getSetMenuList = function() {

            $http.get('http://opos.tech-dojo.org/setmenus').success(function(data) {

                $scope.setmenus = data;

            })
        };

        $scope.getfoodItemById = function(id) {

            for (var i = 0; i < $scope.fooditems.length; i++) {
                if ($scope.fooditems[i]._id == id) {

                    return $scope.fooditems[i];
                }
            }
        };

        $scope.getsetMenuById = function(id) {

            for (var i = 0; i < $scope.setmenus.length; i++) {
                if ($scope.setmenus[i]._id == id) {
                    return $scope.setmenus[i];
                }
            }
        };

    })
    //--------------------------Order Create Controller Ends--------------------//

    //--------------------------Report Controller Start--------------------//

.controller('ReportCtrl', function($scope, $http, Authentication) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

$scope.authentication = Authentication;

 $scope.start = new Date();
        $scope.end = new Date();

        $scope.startReportDate = {

            titleLabel: 'Title', //Optional
            todayLabel: 'Today', //Optional
            closeLabel: 'Close', //Optional
            setLabel: 'Set', //Optional
            setButtonType: 'button-assertive', //Optional
            todayButtonType: 'button-assertive', //Optional
            closeButtonType: 'button-assertive', //Optional
            inputDate: $scope.start, //Optional
            mondayFirst: true, //Optional

            templateType: 'popup', //Optional
            showTodayButton: 'true', //Optional
            modalHeaderColor: 'bar-positive', //Optional
            modalFooterColor: 'bar-positive',
            callback: function(val) { //Mandatory
                startReportDateCallback(val);
            }
        };


        $scope.endReportDate = {

            titleLabel: 'Title', //Optional
            todayLabel: 'Today', //Optional
            closeLabel: 'Close', //Optional
            setLabel: 'Set', //Optional
            setButtonType: 'button-assertive', //Optional
            todayButtonType: 'button-assertive', //Optional
            closeButtonType: 'button-assertive', //Optional
            inputDate: $scope.end, //Optional
            mondayFirst: true, //Optional

            templateType: 'popup', //Optional
            showTodayButton: 'true', //Optional
            modalHeaderColor: 'bar-positive', //Optional
            modalFooterColor: 'bar-positive',
            callback: function(val) { //Mandatory
                endReportDateCallback(val);
            }
        };


        var startReportDateCallback = function(val) {
            if (typeof(val) === 'undefined') {
                alert('No Date Selected');

            } else {
                $scope.start = val;

            }
        };
        var endReportDateCallback = function(val) {
            if (typeof(val) === 'undefined') {
                alert('No Date Selected');

            } else {
                $scope.end = val;
            }
        };

        $scope.generateReport = function() {

            if ($scope.start > $scope.end) {

                $scope.wrongDateRange = 'incorrect date range';

            } else {

                $http({
                    method: 'GET',
                    url: 'http://opos.tech-dojo.org/getOrdersFromDate?0=' + $scope.start + '&1=' + $scope.end

                }).success(function(data) {

                    var totalQuanity = 0,
                        totalPrice = 0;

                    for (var i = 0; i < data.length; i++) {

                        totalPrice = totalPrice + data[i].price;
                        totalQuanity = totalQuanity + data[i].quantity;

                    }

                    $scope.reportData = data;

                    $scope.reportTotalPrice = totalPrice;
                    $scope.reportTotalQuanity = totalQuanity;


                }).error(function(response) {
                    // Show user error message and clear form

                    $scope.error = response.message;
                    $scope.contact = '';

                });
            }

        };




    })

//--------------------------Report Controller end--------------------//
