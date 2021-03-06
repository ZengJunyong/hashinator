// Generated by CoffeeScript 1.6.3
(function() {
  define(["jquery", "underscore", "backbone", "hashers/md5", "hashers/sha1", "hashers/sha256", "hashers/scrypt"], function($, _, Backbone, md5, sha1, sha256, scrypt) {
    return Backbone.Model.extend({
      defaults: {
        input: "hello world"
      },
      initialize: function(options) {
        var _this = this;
        return this.on("change:input", function(m, v) {
          md5(v, function(hash) {
            return _this.set('hash_md5', hash);
          });
          sha1(v, function(hash) {
            return _this.set('hash_sha1', hash);
          });
          sha256(v, function(hash) {
            return _this.set('hash_sha256', hash);
          });
          return scrypt(v, function(hash) {
            return _this.set('scrypt', hash);
          });
        });
      }
    });
  });

}).call(this);
