var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'XXX',
    troop: '1',
    scout: '1'
  },
  device: { name: 'power', driver: 'pinoccio-power' }
})

.on('ready', function(robot) {
  every((3).seconds(), function() {
    robot.power.voltage(function(err, data) {
      console.log(err);
      console.log(data);
    });
  });
})

.start();
