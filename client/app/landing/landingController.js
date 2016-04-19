angular.module('tictactoe.landing', [])
.controller('LandingController', function(Landing, $scope, Socket) {
  $scope.gameName = '';
  $scope.username = '';
  $scope.game = function() {
    Landing.createGame($scope.gameName);
    Landing.startGame($scope.gameName);
    Landing.createUser($scope.username);
  };
});
