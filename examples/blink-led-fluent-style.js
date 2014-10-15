var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'XXX',
    troop: '1',
    scout: '1'
  },
  device: { name: 'led', driver: 'pinoccio-led' }
})

.on('ready', function(robot) {
  var on = false;

  robot.led.blink(127, 127, 127);

  every((1).second(), function() {
    if (on) {
      robot.led.turnOff();
      on = false;
    } else {
      robot.led.turnOn();
      on = true;
    }
  });
})

.start();
