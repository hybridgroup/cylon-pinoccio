var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: 'SECRET_TOKEN',
    troop: '1',
    scout: '1'
  },

  device: { name: 'led', driver: 'led', pin: 'D5' },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
