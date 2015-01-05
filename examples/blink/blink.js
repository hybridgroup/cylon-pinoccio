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
    every((1).second(), my.led.toggle);
  }
}).start();
