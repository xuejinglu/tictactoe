var User = require('./users');

module.exports = {
  addUser: function(req, res, next) {
    var username = req.body.username;
    User.create({
      username: username
    }).then(function(){
      res.status = 201;
      res.end();
    })
  }
}
