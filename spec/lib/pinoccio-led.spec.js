/* jshint expr:true */
"use strict";

var Cylon = require("cylon");

var LED = source("pinoccio-led");

describe("Pinoccio-LED", function() {
  var led;

  beforeEach(function() {
    led = new LED({
      connection: { command: spy() }
    });
  });

  it("subclasses Cylon.Driver", function() {
    expect(led).to.be.an.instanceOf(Cylon.Driver);
    expect(led).to.be.an.instanceOf(LED);
  });

  describe("#commands", function() {
    it("is an object containing LED commands", function() {
      for (var c in led.commands) {
        expect(led.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#turnOn", function() {
    it("tells the connection to turn on the LED", function() {
      led.turnOn();
      expect(led.connection.command).to.be.calledWith("led.on");
    });
  });

  describe("#turnOff", function() {
    it("tells the connection to turn off the LED", function() {
      led.turnOff();
      expect(led.connection.command).to.be.calledWith("led.off");
    });
  });

  describe("#red", function() {
    it("tells the connection to turn the LED red", function() {
      led.red();
      expect(led.connection.command).to.be.calledWith("led.red");
    });
  });

  describe("#green", function() {
    it("tells the connection to turn the LED green", function() {
      led.green();
      expect(led.connection.command).to.be.calledWith("led.green");
    });
  });

  describe("#blue", function() {
    it("tells the connection to turn the LED blue", function() {
      led.blue();
      expect(led.connection.command).to.be.calledWith("led.blue");
    });
  });

  describe("#cyan", function() {
    it("tells the connection to turn the LED cyan", function() {
      led.cyan();
      expect(led.connection.command).to.be.calledWith("led.cyan");
    });
  });

  describe("#purple", function() {
    it("tells the connection to turn the LED purple", function() {
      led.purple();
      expect(led.connection.command).to.be.calledWith("led.purple");
    });
  });

  describe("#magenta", function() {
    it("tells the connection to turn the LED magenta", function() {
      led.magenta();
      expect(led.connection.command).to.be.calledWith("led.magenta");
    });
  });

  describe("#yellow", function() {
    it("tells the connection to turn the LED yellow", function() {
      led.yellow();
      expect(led.connection.command).to.be.calledWith("led.yellow");
    });
  });

  describe("#orange", function() {
    it("tells the connection to turn the LED orange", function() {
      led.orange();
      expect(led.connection.command).to.be.calledWith("led.orange");
    });
  });

  describe("#white", function() {
    it("tells the connection to turn the LED white", function() {
      led.white();
      expect(led.connection.command).to.be.calledWith("led.white");
    });
  });

  describe("#torch", function() {
    it("tells the connection to put the LED in torch mode", function() {
      led.torch();
      expect(led.connection.command).to.be.calledWith("led.torch");
    });
  });

  describe("#hex", function() {
    it("tells the connection to set the LED's hex color", function() {
      led.hex("444");
      expect(led.connection.command).to.be.calledWith("led.sethex(\"444\")");
    });
  });

  describe("#rgb", function() {
    it("tells the connection to set the LED's rgb color", function() {
      led.rgb(255, 255, 255);
      expect(led.connection.command).to.be.calledWith(
        "led.setrgb(255, 255, 255)"
      );
    });
  });

  describe("#saveTorch", function() {
    it("tells the connection to save the LED torch", function() {
      led.saveTorch(255, 255, 255);
      expect(led.connection.command).to.be.calledWith(
        "led.savetorch(255, 255, 255)"
      );
    });
  });

  describe("#blink", function() {
    it("tells the connection to blink the LED", function() {
      led.blink(255, 255, 255);
      expect(led.connection.command).to.be.calledWith(
        "led.blink(255, 255, 255)"
      );
    });
  });
});
