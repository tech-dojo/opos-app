angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$http','$location', 'Authentication',
    function($scope, $http,$location, Authentication ) {

    $scope.authentication = Authentication;

   $scope.credentials ={
      username: 'admin',
      password: 'opos1234'
    };

    $scope.signin = function() {

      console.log($scope.credentials);
      $http.post('http://opos.tech-dojo.org/auth/signin', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
        console.log('success');
        // And redirect to the index page
        $location.path('/view');
        $scope.success= true;

      }).error(function(response) {
        $scope.error = response.message;
        console.log("fgfgfgfgfg");
      $scope.success= false;        

      });
    };

      $scope.start = new Date();
      $scope.end = new Date();
      $scope.startReportDate = {

        titleLabel: 'Title',  //Optional
        todayLabel: 'Today',  //Optional
        closeLabel: 'Close',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
      inputDate: $scope.start,    //Optional
        mondayFirst: true,    //Optional

        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive',
        callback: function (val) {    //Mandatory
          startReportDateCallback(val);
        }
      };


      $scope.endReportDate = {

        titleLabel: 'Title',  //Optional
        todayLabel: 'Today',  //Optional
        closeLabel: 'Close',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
       inputDate: $scope.end,    //Optional
        mondayFirst: true,    //Optional

        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive',
        callback: function (val) {    //Mandatory
          endReportDateCallback(val);
        }
      };


      var startReportDateCallback = function (val) {
        if (typeof(val) === 'undefined') {
          console.log('No date selected');
        } else {
          $scope.start  = val;
          console.log(val)
        }
      };
      var endReportDateCallback = function (val) {
        if (typeof(val) === 'undefined') {
          console.log('No date selected');
        } else {
          $scope.end = val;
          console.log(val)
        }
      };

    $scope.generateReport = function() {
 
      console.log($scope.startReportDate );
      console.log($scope.endReportDate );

       if($scope.start>$scope.end){

console.log('inside');
      $scope.wrongDateRange = 'incorrect date range';

       }
      else{

      $http({
        method: 'GET',
        url: 'http://opos.tech-dojo.org/getOrdersFromDate?0='+$scope.start+'&1='+ $scope.end

      }).success(function(data) {


        console.log("checking "+data);
        //var totalQuanity, totalPrice;
        var totalQuanity= 0,  totalPrice=0;
        //   console.log(data);
        for (var i=0; i<data.length; i++){
          // console.log(data.price);
          totalPrice= totalPrice+ data[i].price;
          totalQuanity= totalQuanity+ data[i].quantity;

        }
        //console.log(data);
        $scope.reportData = data;

        $scope.reportTotalPrice = totalPrice;
        $scope.reportTotalQuanity=totalQuanity;


      }).error(function(response) {
        // Show user error message and clear form
        console.log("error");
        $scope.error = response.message;
        $scope.contact = '';

      });
      }

    };



  }
])

//--------------------------Order Create Controller Starts--------------------//

.controller('OrderCtrl', function($scope , $http, Authentication) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

     $scope.authentication = Authentication;
     console.log('Hello');
           $http.get('http://opos.tech-dojo.org/orders').success(function(data) {
$scope.orders  = data;
            console.log(data);

    //     // If successful we assign the response to the global user model
    //     $scope.authentication.user = response;
    //     console.log('success');
    //     // And redirect to the index page
         //$location.path('/orders');
         })
    })
//--------------------------Order Create Controller Ends--------------------//

.controller('ChatsCtrl', function($scope, Chats , Authentication) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.authentication = Authentication;


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
