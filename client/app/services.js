angular.module( 'tictactoe.services', [] )
.factory('Landing', function($http, $window, $location) {
  return {
    createGame: function(gameName) {
      return $http.post('/api/games', {
        gameName: gameName,
      })
      .then(function(response) {
        return response;
      }, function(err) {
        console.error(err);
      });
    },
    startGame: function(gameName) {
      return $location.path('/lobby');
    },
    createUser: function(username) {
      return $http.post('/api/users', {
        username:username,
      })
      .then(function(response){
        return response;
      }, function(err) {
        console.error(err);
      });        
    },
    fetchGames: function() {
      return $http.get('/api/games')
      .then(function(response) {
        return response.data;
      }, function(err) {
        console.error(err);
      });
    }
  }
})
.factory('Lobby', function($http){
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
