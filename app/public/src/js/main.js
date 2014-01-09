// Generated by CoffeeScript 1.6.3
(function() {
  require(["jquery", "models/hash"], function($, Hash) {
    var h;
    h = new Hash;
    h.on('change:hash_md5', function(m, v) {
      return $('#md5').text(v);
    });
    h.on('change:hash_sha1', function(m, v) {
      return $('#sha1').text(v);
    });
    h.on('change:hash_sha256', function(m, v) {
      return $('#sha256').text(v);
    });
    h.on('change:scrypt', function(m, v) {
      return $('#scrypt').text(v);
    });
    return $('#hashIt').on('click', function() {
      return h.set('input', $('#input').val());
    });
  });

}).call(this);
