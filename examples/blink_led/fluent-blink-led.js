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
  .device("led", { driver: "led", pin: "D5" })

  .on("ready", function(bot) {
    var on = false;

    bot.led.blink(127, 127, 127);

    every((1).second(), function() {
      if (on) {
        bot.led.turnOff();
        on = false;
      } else {
        bot.led.turnOn();
        on = true;
      }
    });
  });

Cylon.start();
