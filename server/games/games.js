var db = require('../config/db');
var Sequelize = require('sequelize');

var Game = db.define('games', {
  gameName : Sequelize.STRING
});

Game.sync().then(function() {
  console.log("games table created");
})
.catch(function(err) {
  console.error(err);
});

module.exports = Game;
