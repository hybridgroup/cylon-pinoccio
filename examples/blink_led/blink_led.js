"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    pinoccio: {
      adaptor: "pinoccio",
      token: "SECRET_TOKEN",
      troop: "1",
      scout: "1"
    }
  },

  devices: {
    led: { driver: "pinoccio-led" }
  },

  work: function(my) {
    var on = false;

    my.led.blink(127, 127, 127);

    every((1).second(), function() {
      if (on) {
        my.led.turnOff();
        on = false;
      } else {
        my.led.turnOn();
        on = true;
      }
    });
  }
}).start();
