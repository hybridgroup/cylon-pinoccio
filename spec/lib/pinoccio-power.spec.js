"use strict";

var Cylon = require("cylon");

var Power = lib("pinoccio-power");

describe("Cylon.Drivers.PinoccioPower", function() {
  var power;

  beforeEach(function() {
    power = new Power({
      connection: { command: spy() }
    });
  });

  it("subclasses Cylon.Driver", function() {
    expect(power).to.be.an.instanceOf(Cylon.Driver);
    expect(power).to.be.an.instanceOf(Power);
  });

  describe("#commands", function() {
    it("is an object containing Power commands", function() {
      for (var c in power.commands) {
        expect(power.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#isCharging", function() {
    it("tells the connection to print if it's charging", function() {
      var callback = spy();
      power.isCharging(callback);
      expect(power.connection.command).to.be.calledWith(
        'printf("%b", power.ischarging)',
        callback
      );
    });
  });

  describe("#percent", function() {
    it("tells the connection to print the battery percentage", function() {
      var callback = spy();
      power.percent(callback);
      expect(power.connection.command).to.be.calledWith(
        'printf("%d", power.percent)',
        callback
      );
    });
  });

  describe("#voltage", function() {
    it("tells the connection to print the battery voltage", function() {
      var callback = spy();
      power.voltage(callback);
      expect(power.connection.command).to.be.calledWith(
        'printf("%d", power.voltage)',
        callback
      );
    });
  });

  describe("#enableVcc", function() {
    it("tells the connection to enable VCC on the battery", function() {
      power.enableVcc();
      expect(power.connection.command).to.be.calledWith("power.enable_vcc");
    });
  });

  describe("#disableVcc", function() {
    it("tells the connection to disable VCC on the battery", function() {
      power.disableVcc();
      expect(power.connection.command).to.be.calledWith("power.disable_vcc");
    });
  });

  describe("#report", function() {
    it("tells the connection to report on the battery", function() {
      var callback = spy();
      power.report(callback);
      expect(power.connection.command).to.be.calledWith(
        'printf("%s", power.report)',
        callback
      );
    });
  });
});
