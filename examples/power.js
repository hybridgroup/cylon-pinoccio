var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'XXX',
    troop: '1',
    scout: '1'
  },

  device: { name: 'power', driver: 'pinoccio-power' },

  work: function(my) {
    every((3).seconds(), function() {
      my.power.voltage(function(err, data) {
        console.log(err);
        console.log(data);
      });
    });
  }
}).start();
