"use strict";

var module = source("cylon-pinoccio");

var Adaptor = source('adaptor'),
    Driver = source('driver');

var GPIO = require('cylon-gpio');

describe("Cylon.Pinoccio", function() {
  describe("driver", function() {
    before(function() {
      stub(GPIO, 'driver').returns({});
    });

    after(function() {
      GPIO.driver.restore();
    });

    it("creates a driver through the GPIO module", function() {
      var params = { name: 'led' };
      module.driver(params);
      expect(GPIO.driver).to.be.calledOnce;
    });
  });

  describe("register", function() {
    var bot = { registerAdaptor: spy(), registerDriver: spy() };

    before(function() {
      stub(GPIO, 'register').returns();
      module.register(bot);
    });

    after(function() {
      GPIO.register.restore();
    });

    it("registers the Pinoccio adaptor", function() {
      expect(bot.registerAdaptor).to.be.calledWith("cylon-pinoccio", "pinoccio");
    });

    it("tells GPIO to register itself", function() {
      expect(GPIO.register).to.be.calledWith(bot);
    });
  });
});
