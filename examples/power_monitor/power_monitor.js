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
    led: { driver: "pinoccio-led" },
    power: { driver: "pinoccio-power" }
  },

  work: function(my) {
    my.led.blue();

    every((2).seconds(), function() {
      my.power.percent(function(err, data) {
        if (err) { console.error(err); }

        if (data < 10) {
          my.led.red();
        } else if (data < 20) {
          my.led.yellow();
        } else {
          my.led.green();
        }
      });
    });
  }
}).start();
