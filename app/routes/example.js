// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(app) {
    app.get('/example', function(req, res) {
      return res.render('example');
    });
    return app.get('/err', function(req, res, next) {
      return next("I just error out.");
    });
  };

}).call(this);
