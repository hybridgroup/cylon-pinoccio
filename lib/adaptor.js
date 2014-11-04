/*
 * Cylonjs Adaptor adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var PinoccioIO = require("pinoccio-io");

var Cylon = require('cylon');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);

  this.analogWrite = this.analogWrite.bind(this);

  this.token = opts.token;
  this.troop = opts.troop;
  this.scout = opts.scout;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  'digitalRead', 'digitalWrite',
  'analogRead', 'analogWrite',
  'pwmWrite', 'servoWrite',
  'command'
];

Adaptor.prototype.connect = function(callback) {
  this.board = new PinoccioIO({
    token: this.token,
    troop: this.troop,
    scout: this.scout
  });

  this.board.on("ready", function() {
    callback();
  });
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.digitalRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.INPUT);
  this.board.digitalRead(pin, callback);
};

Adaptor.prototype.digitalWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.OUTPUT);
  this.board.digitalWrite(pin, value);
};

Adaptor.prototype.analogRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogRead(pin, callback);
};

Adaptor.prototype.analogWrite = function(pin, value) {
  value = (value).toScale(0, 255);
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogWrite(pin, value);
};

Adaptor.prototype.pwmWrite = function(pin, value) {
  value = (value).toScale(0, 255);
  this.board.pinMode(pin, this.board.MODES.PWM);
  this.board.analogWrite(pin, value);
};

Adaptor.prototype.servoWrite = function(pin, value) {
  value = (value).toScale(0, 180);
  this.board.pinMode(pin, this.board.MODES.SERVO);
  this.board.servoWrite(pin, value);
};

Adaptor.prototype.pinVal = function(value) {
  return (value === 1) ? "HIGH" : "LOW";
};

Adaptor.prototype.command = function(cmd, callback) {
  this.board.command(cmd, callback || function() {});
};
