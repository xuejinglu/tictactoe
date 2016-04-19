angular.module( 'tictactoe.services', [] )
.factory('Landing', function( $http, $window, $location) {
  return {
    createGame: function(gameName) {
      return $http.post('/api/games', {
        gameName: gameName,
        username:username,
      })
      .then(function(response) {
        return response;
      }, function(err) {
        console.error(err);
      });
    },
    startGame: function(gameName) {
      return $location.path('/lobby');
    }
  }
})
.factory('Lobby', function(){
  return {
    getPlayers: function(gameID) {
    return $http.get('/api/user/:gameID')
    .then(function(response){
      return response;
    }, function(err) {
      console.error(err);
    });
    },
  }
})
.factory('Socket',function(){
  var socket = io.connect('http://localhost:8080');
  return socket;
});
