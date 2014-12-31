"use strict";

var Cylon = require('cylon'),
    Util = require('util');

var PinoccioLed = module.exports = function PinoccioLed() {
  PinoccioLed.__super__.constructor.apply(this, arguments);

  this.commands = {
    turn_on: this.turnOn,
    turn_off: this.turnOff,

    red: this.red,
    green: this.green,
    blue: this.blue,
    cyan: this.cyan,
    purple: this.purple,
    magenta: this.magenta,
    yellow: this.yellow,
    orange: this.orange,
    white: this.white,

    hex: this.hex,
    rgb: this.rgb,

    torch: this.torch,

    save_torch: this.saveTorch,
    blink: this.blink
  };
};

Cylon.Utils.subclass(PinoccioLed, Cylon.Driver);

/**
 * Starts the LED
 *
 * @param {Function} callback to be triggered when started
 * @return {null}
 */
PinoccioLed.prototype.start = function(callback) {
  callback();
};

/**
 * Stops the LED
 *
 * @param {Function} callback to be triggered when halted
 * @return {null}
 */
PinoccioLed.prototype.halt = function(callback) {
  callback();
};

/**
 * Turns the LED on.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.turnOn = function() {
  this.connection.command("led.on");
};

/**
 * Turns the LED off.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.turnOff = function() {
  this.connection.command("led.off");
};

/**
 * Turns the LED red.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.red = function() {
  this.connection.command("led.red");
};

/**
 * Turns the LED green.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.green = function() {
  this.connection.command("led.green");
};

/**
 * Turns the LED blue.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.blue = function() {
  this.connection.command("led.blue");
};

/**
 * Turns the LED cyan.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.cyan = function() {
  this.connection.command("led.cyan");
};

/**
 * Turns the LED purple.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.purple = function() {
  this.connection.command("led.purple");
};

/**
 * Turns the LED magenta.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.magenta = function() {
  this.connection.command("led.magenta");
};

/**
 * Turns the LED yellow.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.yellow = function() {
  this.connection.command("led.yellow");
};

/**
 * Turns the LED orange.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.orange = function() {
  this.connection.command("led.orange");
};

/**
 * Turns the LED white.
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.white = function() {
  this.connection.command("led.white");
};

/**
 * Enables the LED's torch mode
 *
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.torch = function() {
  this.connection.command("led.torch");
};

/**
 * Sets the LED's color based on a provided hex color
 *
 * @param {String} value
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.hex = function(value) {
  var cmd = Util.format('led.sethex("%s")', value);
  this.connection.command(cmd);
};

/**
 * Sets the LED's color based on a provided RGB color
 *
 * @param {String} r
 * @param {String} g
 * @param {String} b
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.rgb = function(r, g, b) {
  var cmd = Util.format('led.setrgb(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};

/**
 * Saves the LED's torch color based on a provided RGB color
 *
 * @param {String} r
 * @param {String} g
 * @param {String} b
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.saveTorch = function(r, g, b) {
  var cmd = Util.format('led.savetorch(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};

/**
 * Blinks the LED with the provided RGB pattern
 *
 * @param {String} r
 * @param {String} g
 * @param {String} b
 * @return {null}
 * @publish
 */
PinoccioLed.prototype.blink = function(r, g, b) {
  var cmd = Util.format('led.blink(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};
