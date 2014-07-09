/*
 * cylon-pinoccio
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    GPIO = require("cylon-gpio");

var Drivers = {
  'pinoccio-led': require('./pinoccio-led'),
  'pinoccio-power': require('./pinoccio-power')
}

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    for (var d in Drivers) {
      if (opts.name === d) {
        return new Drivers[d](opts);
      }
    }

    return GPIO.driver(opts);
  },

  register: function(robot) {
    robot.registerAdaptor('cylon-pinoccio', 'pinoccio');

    for (var d in Drivers) {
      robot.registerDriver('cylon-pinoccio', d);
    }

    GPIO.register(robot);
  }
};
