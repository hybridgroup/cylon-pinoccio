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
  .device("led", { driver: "led", pin: "D5" })

  .on("ready", function(bot) {
    bot.led.blue();

    every((2).seconds(), function() {
      bot.power.percent(function(err, data){
        if (data < 10) {
          bot.led.red();
        } else if (data < 20) {
          bot.led.yellow();
        } else {
          bot.led.green();
        }
      });
    });
  });

Cylon.start();
