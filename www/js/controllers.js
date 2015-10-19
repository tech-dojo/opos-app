angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$http','$location', 'Authentication',function($scope, $http,$location, Authentication ) {

    $scope.authentication = Authentication;

    $scope.credentials ={
      username: '',
      password: ''
    };

    $scope.signin = function() {

      console.log($scope.credentials);
      $http.post('http://opos.tech-dojo.org/auth/signin', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
console.log('success');
        // And redirect to the index page
        $location.path('/view');


      }).error(function(response) {
        $scope.error = response.message;
      });
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
