"use strict";

var Adaptor = require("./lib/adaptor");

var Drivers = {
  "pinoccio-led": require("./lib/pinoccio-led"),
  "pinoccio-power": require("./lib/pinoccio-power")
};

module.exports = {
  adaptors: ["pinoccio"],
  drivers: Object.keys(Drivers),
  dependencies: ["cylon-gpio"],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    if (Drivers[opts.driver]) {
      return new Drivers[opts.driver](opts);
    }

    return null;
  }
};
