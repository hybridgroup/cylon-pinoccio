var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'XXX',
    troop: '1',
    scout: '1'
  },

  devices: [
    { name: 'led', driver: 'pinoccio-led' },
    { name: 'power', driver: 'pinoccio-power' }
  ]
})

.on('ready', function(robot) {
  robot.led.blue();

  every((2).seconds(), function() {
    robot.power.percent(function(err, data){
      if (data < 10) {
        robot.led.red();
      } else if (data < 20) {
        robot.led.yellow();
      } else {
        robot.led.green();
      }
    });
  });
})

.start();
