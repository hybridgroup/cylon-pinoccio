/*
 * Cylonjs Pinoccio adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var PinoccioIO = require("pinoccio-io"),
    EventSource = require('eventsource');

var Cylon = require('cylon');

var Pinoccio = module.exports = function Pinoccio(opts) {
  if (opts == null) { opts = {}; }
  var extraParams = opts.extraParams || {};

  this.analogWrite = Cylon.Utils.bind(this.analogWrite, this);

  Pinoccio.__super__.constructor.apply(this, arguments);

  this.token = extraParams.token;
  this.troop = extraParams.troop;
  this.scout = extraParams.scout;  
}

Cylon.Utils.subclass(Pinoccio, Cylon.Adaptor);

Pinoccio.prototype.commands = [
  'digitalRead',
  'digitalWrite',
  'analogRead',
  'analogWrite',
  'pwmWrite',
  'servoWrite',
  'command'
];

Pinoccio.prototype.connect = function(callback) {
  this.board = new PinoccioIO({
    token: this.token,
    troop: this.troop,
    scout: this.scout
  });

  this.board.on("ready", function() {
    callback();
  });
};

Pinoccio.prototype.digitalRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.INPUT);
  this.board.digitalRead(pin, callback);
};

Pinoccio.prototype.digitalWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.OUTPUT);
  this.board.digitalWrite(pin, value);
};

Pinoccio.prototype.analogRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogRead(pin, callback);
};

Pinoccio.prototype.analogWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogWrite(pin, value);
};

Pinoccio.prototype.pwmWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.PWM);
  this.board.analogWrite(pin, value);
};

Pinoccio.prototype.servoWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.SERVO);
  this.board.servoWrite(pin, value);
};

Pinoccio.prototype.pinVal = function(value) {
  return (value === 1) ? "HIGH" : "LOW";
};

Pinoccio.prototype.command = function(cmd, callback) {
	var cb = callback ;
	if (cb == null) {
		cb = function(err, data){}
	}

  this.board.command(cmd, cb);
};
