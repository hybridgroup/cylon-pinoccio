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
    Led = require('./pinoccio-led'),
    Power = require('./pinoccio-power'),
    GPIO = require("cylon-gpio");

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    if (opts.name === 'pinoccio-led') {
      return new Led(opts);
    } else if (opts.name === 'pinoccio-power') {
      return new Power(opts);
    } else {
      return(GPIO.driver.apply(GPIO, opts));
    }
  },

  register: function(robot) {
    robot.registerAdaptor('cylon-pinoccio', 'pinoccio');
    robot.registerDriver('cylon-pinoccio', 'pinoccio-led');
    robot.registerDriver('cylon-pinoccio', 'pinoccio-power');

    GPIO.register(robot);
  }
};
