"use strict";

var module = source("cylon-pinoccio");

var Adaptor = source('adaptor');

var Drivers = {
  LED: source('pinoccio-led'),
  Power: source('pinoccio-power')
}

var GPIO = require('cylon-gpio');

describe("Cylon.Pinoccio", function() {
  describe("#register", function() {
    var bot, driver, adaptor;

    beforeEach(function() {
      bot = {};
      driver = bot.registerDriver = spy();
      adaptor = bot.registerAdaptor = spy();

      stub(GPIO, 'register');

      module.register(bot);
    });

    afterEach(function() {
      GPIO.register.restore();
    });

    it("registers the 'pinoccio' adaptor", function() {
      expect(adaptor).to.be.calledWith('cylon-pinoccio', 'pinoccio');
    });

    it("registers the 'pinoccio-led' driver", function() {
      expect(driver).to.be.calledWith('cylon-pinoccio', 'pinoccio-led');
    });

    it("registers the 'pinoccio-power' driver", function() {
      expect(driver).to.be.calledWith('cylon-pinoccio', 'pinoccio-power');
    });

    it("registers the GPIO module with the robot", function() {
      expect(GPIO.register).to.be.calledWith(bot);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    var opts;

    beforeEach(function() {
      opts = { name: '', device: {} };
    });

    context("with a 'name' of 'pinoccio-led'", function() {
      beforeEach(function() {
        opts.name = 'pinoccio-led'
      });

      it("creates an instance of the Pinoccio LED driver", function() {
        expect(module.driver(opts)).to.be.an.instanceOf(Drivers.LED);
      });
    });

    context("with a 'name' of 'pinoccio-power'", function() {
      beforeEach(function() {
        opts.name = 'pinoccio-power'
      });

      it("creates an instance of the Pinoccio POWER driver", function() {
        expect(module.driver(opts)).to.be.an.instanceOf(Drivers.Power);
      });
    });

    context("with any other name", function() {
      beforeEach(function() {
        opts.name = 'led'
      });

      it("defers to GPIO#driver", function() {
        var driver = module.driver(opts)
        expect(driver.constructor.name).to.be.eql("Led");
      });
    });
  });
});
