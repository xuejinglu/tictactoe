var Game = require( './games' );

module.exports = {
  addGame: function(req, res, next) {
    var gameName = req.body.gameName;
    Game.create({
      gameName: gameName
    }).then(function(){
      res.status = 201;
      res.end();
    })
  },
  getGame: function(req, res, next) {
    Game.findAll()
    .then(function(games) {
      res.send(games);
    })
  },
}
