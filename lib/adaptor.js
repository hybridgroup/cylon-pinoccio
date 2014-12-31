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
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.analogWrite = this.analogWrite.bind(this);

  this.token = opts.token;
  this.troop = opts.troop;
  this.scout = opts.scout;

  if (this.token == null || this.troop == null || this.scout == null) {
    throw new Error("One or more of 'token', 'troop', or 'scout' was not specified for the Pinoccio adaptor. Cannot continue");
  }
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

/**
 * Connects to the Pinoccio board
 *
 * @param {Function} callback to be triggered when connected
 * @return {null}
 */
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

/**
 * Disconnects from the Pinoccio
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {null}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Reads a value from a digital pin
 *
 * @param {Number} pin
 * @param {Function} callback triggered when the value has been read from the
 * pin
 * @return {null}
 * @publish
 */
Adaptor.prototype.digitalRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.INPUT);
  this.board.digitalRead(pin, callback);
};

/**
 * Writes a value to a digital pin
 *
 * @param {Number} pin
 * @param {Number} value
 * @return {null}
 * @publish
 */
Adaptor.prototype.digitalWrite = function(pin, value) {
  this.board.pinMode(pin, this.board.MODES.OUTPUT);
  this.board.digitalWrite(pin, value);
};

/**
 * Reads a value from an analog pin
 *
 * @param {Number} pin
 * @param {Function} callback triggered when the value has been read from the
 * pin
 * @return {null}
 * @publish
 */
Adaptor.prototype.analogRead = function(pin, callback) {
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogRead(pin, callback);
};

/**
 * Writes a value to an analog pin
 *
 * @param {Number} pin
 * @param {Number} value
 * @return {null}
 * @publish
 */
Adaptor.prototype.analogWrite = function(pin, value) {
  value = (value).toScale(0, 255);
  this.board.pinMode(pin, this.board.MODES.ANALOG);
  this.board.analogWrite(pin, value);
};

/**
 * Writes a PWM value to a pin
 *
 * @param {Number} pin
 * @param {Number} value
 * @return {null}
 * @publish
 */
Adaptor.prototype.pwmWrite = function(pin, value) {
  value = (value).toScale(0, 255);
  this.board.pinMode(pin, this.board.MODES.PWM);
  this.board.analogWrite(pin, value);
};

/**
 * Writes a servo value to a pin
 *
 * @param {Number} pin
 * @param {Number} value
 * @return {null}
 * @publish
 */
Adaptor.prototype.servoWrite = function(pin, value) {
  value = (value).toScale(0, 180);
  this.board.pinMode(pin, this.board.MODES.SERVO);
  this.board.servoWrite(pin, value);
};

/**
 * Detemines if a (digital) pin's value is LOW or HIGH
 *
 * @param {Number} value
 * @return {String} 'LOW' or 'HIGH'
 * @publish
 */
Adaptor.prototype.pinVal = function(value) {
  return (value === 1) ? "HIGH" : "LOW";
};

/**
 * Issues a command to the Pinoccio
 *
 * @param {String} cmd
 * @param {Function} callback
 * @return {null}
 * @publish
 */
Adaptor.prototype.command = function(cmd, callback) {
  this.board.command(cmd, callback || function() {});
};
