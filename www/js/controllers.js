angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$http', 'Authentication',function($scope, $http, Authentication ) {

    $scope.authentication = Authentication;

    $scope.credentials ={
      username: '',
      password: ''
    };

    $scope.signin = function() {

      console.log($scope.credentials);
      $http.post('https://opos.tech-dojo.org/auth/signin', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
console.log('success');
        // And redirect to the index page
        $location.path('#/tab/chats');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };


  }
])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
