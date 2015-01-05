/*
 * cylon-pinoccio
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Adaptor = require("./adaptor");

var Drivers = {
  "pinoccio-led": require("./pinoccio-led"),
  "pinoccio-power": require("./pinoccio-power")
};

module.exports = {
  adaptors: ["pinoccio"],
  drivers: Object.keys(Drivers),
  dependencies: ["cylon-gpio"],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    for (var d in Drivers) {
      if (opts.driver === d) {
        return new Drivers[d](opts);
      }
    }
  }
};
