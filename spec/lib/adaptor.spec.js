'use strict';

var Cylon = require('cylon'),
    PinoccioIO = require('pinoccio-io');

var EventEmitter = require('events').EventEmitter;

var Adaptor = source("adaptor");

describe("Cylon.Adaptors.Pinoccio", function() {
  var adaptor;

  beforeEach(function() {
    adaptor = new Adaptor({
      token: 'token',
      troop: 'troop',
      scout: 'scout'
    })
  });

  it("subclasses Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
    expect(adaptor).to.be.an.instanceOf(Adaptor);
  });

  describe("constructor", function() {
    it("sets @token to the provided token", function() {
      expect(adaptor.token).to.be.eql('token');
    });

    it("sets @troop to the provided troop", function() {
      expect(adaptor.troop).to.be.eql('troop');
    });

    it("sets @scout to the provided scout", function() {
      expect(adaptor.scout).to.be.eql('scout');
    });
  });

  describe("#commands", function() {
    it("is an array of Pinoccio commands", function() {
      var commands = adaptor.commands;

      expect(commands).to.be.an('array');

      commands.forEach(function(command) {
        expect(command).to.be.a('string');
      });
    });
  });

  describe("#connect", function() {
    var callback;

    beforeEach(function() {
      callback = spy();

      adaptor.connect(callback);
    });

    it("sets @board to a Pinoccio instance", function() {
      expect(adaptor.board).to.be.an.instanceOf(PinoccioIO);
    });

    context("when the board is ready", function() {
      it("triggers the callback", function() {
        adaptor.board.emit('ready');
        expect(callback).to.be.called;
      })
    });
  });

  describe("read/write functions", function() {
    beforeEach(function() {
        adaptor.board = {
          MODES: {
            INPUT:  'input',
            OUTPUT: 'output',
            ANALOG: 'analog',
            PWM:    'pwm',
            SERVO:  'servo'
          },

          pinMode: spy(),

          digitalRead: spy(),
          digitalWrite: spy(),

          analogRead: spy(),
          analogWrite: spy(),

          pwmWrite: spy(),
          servoWrite: spy()
        };
    });

    describe("#digitalRead", function() {
      var board, callback;

      beforeEach(function() {
        callback = spy();
        board = adaptor.board

        adaptor.digitalRead('10', callback);
      });

      it("sets the board's pin mode to 'input'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'input');
      });

      it("tells the board to read from the pin", function() {
        expect(board.digitalRead).to.be.calledWith('10', callback);
      });
    });

    describe("#digitalWrite", function() {
      var board;

      beforeEach(function() {
        board = adaptor.board;
        adaptor.digitalWrite('10', 1);
      });

      it("sets the board's pin mode to 'output'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'output');
      });

      it("tells the board to write to the pin", function() {
        expect(board.digitalWrite).to.be.calledWith('10', 1);
      });
    });

    describe("#analogRead", function() {
      var board, callback;

      beforeEach(function() {
        callback = spy();
        board = adaptor.board

        adaptor.analogRead('10', callback);
      });

      it("sets the board's pin mode to 'analog'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'analog');
      });

      it("tells the board to read from the pin", function() {
        expect(board.analogRead).to.be.calledWith('10', callback);
      });
    });

    describe("#analogWrite", function() {
      var board;

      beforeEach(function() {
        board = adaptor.board;
        adaptor.analogWrite('10', 1);
      });

      it("sets the board's pin mode to 'analog'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'analog');
      });

      it("tells the board to write to the pin", function() {
        expect(board.analogWrite).to.be.calledWith('10', 255);
      });
    });

    describe("#pwmWrite", function() {
      var board;

      beforeEach(function() {
        board = adaptor.board;
        adaptor.pwmWrite('10', 1);
      });

      it("sets the board's pin mode to 'pwm'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'pwm');
      });

      it("tells the board to write to the pin", function() {
        expect(board.analogWrite).to.be.calledWith('10', 255);
      });
    });

    describe("#servoWrite", function() {
      var board;

      beforeEach(function() {
        board = adaptor.board;
        adaptor.servoWrite('10', 1);
      });

      it("sets the board's pin mode to 'servo'", function() {
        expect(board.pinMode).to.be.calledWith('10', 'servo');
      });

      it("tells the board to write to the pin", function() {
        expect(board.servoWrite).to.be.calledWith('10', 180);
      });
    });
  });

  describe("#pinVal", function() {
    context("if the value is 1", function() {
      it("returns 'HIGH'", function() {
        expect(adaptor.pinVal(1)).to.be.eql('HIGH');
      });
    });

    context("if the value is not 1", function() {
      it("returns 'LOW'", function() {
        expect(adaptor.pinVal(0)).to.be.eql('LOW');
      });
    });
  });

  describe("#command", function() {
    var board;

    beforeEach(function() {
      board = adaptor.board = { command: spy() };
    });

    it("issues a command to the board with the provided callback", function() {
      var callback = spy();
      adaptor.command("hello", callback);
      expect(board.command).to.be.calledWith("hello", callback);
    })

    context("if no callback is provided", function() {
      it("substitutes a no-op function", function() {
        adaptor.command("hello");
        var args = board.command.firstCall.args;

        expect(args[0]).to.be.eql('hello');
        expect(args[1]).to.be.a('function');
      });
    });
  });
});
