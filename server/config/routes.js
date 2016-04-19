var gamesController = require('../games/gamesController');

module.exports = function(app, express){
  app.post('/api/games', gamesController.addGame);
}