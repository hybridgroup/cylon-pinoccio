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
    power: { driver: "pinoccio-power" }
  },

  work: function(my) {
    every((3).seconds(), function() {
      my.power.voltage(function(err, data) {
        console.log(err);
        console.log(data);
      });
    });
  }
}).start();
