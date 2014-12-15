var Cylon = require('cylon');

Cylon
  .robot()
  .connection('pinoccio', {
    adaptor: 'pinoccio',
    token: 'SECRET_TOKEN',
    troop: '1',
    scout: '1'
  })
  .device("led", { driver: 'led', pin: 'D5' })

  .on('ready', function(bot) {
    every((1).second(), function() {
      bot.led.toggle();
    });
  });

Cylon.start();
