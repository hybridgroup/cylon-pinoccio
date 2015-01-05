"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("pinoccio", {
    adaptor: "pinoccio",
    token: "SECRET_TOKEN",
    troop: "1",
    scout: "1"
  })
  .device("power", { driver: "pinoccio-power" })
  .on("ready", function(bot) {
    every((3).seconds(), function() {
      bot.power.voltage(function(err, data) {
        console.log(err);
        console.log(data);
      });
    });
  });

Cylon.start();
