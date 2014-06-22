var Cylon = require('cylon');

Cylon.robot({
  connection: { 
  	name: 'pinoccio', 
  	adaptor: 'pinoccio', 
  	token: 'XXX', 
  	troop: '1', 
  	scout: '1' },
  device: {name: 'led', driver: 'pinoccio-led'},

  work: function(my) {
    var isOn = false;
    my.led.blink(127, 127, 127);
    every((1).second(), function() {
      if (isOn === true) {
        isOn = false;
        my.led.turnOff();
      } else {
        isOn = true;
        my.led.turnOn();        
      }
    });
  }
}).start();
