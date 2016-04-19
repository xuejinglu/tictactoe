angular.module('tictactoe.lobby', [])
.controller('LobbyController', function(Lobby, $scope, Socket) {
  $scope.users = [];
  $scope.populatePlayers = function() {
    $scope.users.push(Lobby.getPlayers());
  }
  $scope.populatePlayers();
});