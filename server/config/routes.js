var gamesController = require('../games/gamesController');
var usersController = require('../users/usersController');

module.exports = function(app, express){
  app.post('/api/games', gamesController.addGame);
  app.post('/api/users', usersController.addUser);
}