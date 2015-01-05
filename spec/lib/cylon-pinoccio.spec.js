/* jshint expr:true */
"use strict";

var pinoccio = source("cylon-pinoccio");

var Adaptor = source("adaptor");

var Drivers = {
  LED: source("pinoccio-led"),
  Power: source("pinoccio-power")
};

describe("Cylon.Pinoccio", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(pinoccio.adaptors).to.be.eql(["pinoccio"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(pinoccio.drivers).to.be.eql(["pinoccio-led", "pinoccio-power"]);
    });
  });

  describe("#dependencies", function() {
    it("is an array of supplied dependencies", function() {
      expect(pinoccio.dependencies).to.be.eql(["cylon-gpio"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor", function() {
      var adaptor = pinoccio.adaptor({ token: "", troop: "", scout: "" });
      expect(adaptor).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    var opts;

    beforeEach(function() {
      opts = { driver: "", adaptor: {} };
    });

    context("with a 'driver' of 'pinoccio-led'", function() {
      beforeEach(function() {
        opts.driver = "pinoccio-led";
      });

      it("creates an instance of the Pinoccio LED driver", function() {
        expect(pinoccio.driver(opts)).to.be.an.instanceOf(Drivers.LED);
      });
    });

    context("with a 'driver' of 'pinoccio-power'", function() {
      beforeEach(function() {
        opts.driver = "pinoccio-power";
      });

      it("creates an instance of the Pinoccio POWER driver", function() {
        expect(pinoccio.driver(opts)).to.be.an.instanceOf(Drivers.Power);
      });
    });
  });
});
