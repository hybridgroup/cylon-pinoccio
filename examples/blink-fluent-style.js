var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'SECRET_TOKEN',
    troop: '1',
    scout: '1'
  },
  device: { name: 'led', driver: 'led', pin: 'D5' }
})

.on('ready', function(robot) {
  every((1).second(), function() {
    robot.led.toggle();
  });
})

.start();
