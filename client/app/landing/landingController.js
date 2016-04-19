angular.module('tictactoe.landing', [])
.controller('LandingController', function(Landing, $scope, Socket) {
  $scope.gameName = '';
  $scope.username = '';
  $scope.games = [];
  $scope.game = function() {
    Landing.createGame($scope.gameName);
    Landing.createUser($scope.username);
    Landing.startGame($scope.gameName);
  };
  $scope.fetchGames = function() {
    Landing.fetchGames().then(function(games){
      $scope.games = games;
    });
  };
  $scope.fetchGames();
});
