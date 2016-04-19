var Sequelize = require('sequelize');
var db = new Sequelize('tictactoe', null, null, {
  dialect: 'sqlite',

  define: {
    underscored: true
  },

  storage: './server/config/tictactoe.sqlite'
});

module.exports = db;
