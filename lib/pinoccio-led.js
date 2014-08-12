"use strict";

var Cylon = require('cylon'),
    Util = require('util');

var PinoccioLed = module.exports = function PinoccioLed(opts) {
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
  }
};

Cylon.Utils.subclass(PinoccioLed, Cylon.Driver);

PinoccioLed.prototype.start = function() {
  PinoccioLed.__super__.start.apply(this, arguments);
};

PinoccioLed.prototype.turnOn = function() {
  this.connection.command("led.on");
};

PinoccioLed.prototype.turnOff = function() {
  this.connection.command("led.off");
};

PinoccioLed.prototype.red = function() {
  this.connection.command("led.red");
};

PinoccioLed.prototype.green = function() {
  this.connection.command("led.green");
};

PinoccioLed.prototype.blue = function() {
  this.connection.command("led.blue");
};

PinoccioLed.prototype.cyan = function() {
  this.connection.command("led.cyan");
};

PinoccioLed.prototype.purple = function() {
  this.connection.command("led.purple");
};

PinoccioLed.prototype.magenta = function() {
  this.connection.command("led.magenta");
};

PinoccioLed.prototype.yellow = function() {
  this.connection.command("led.yellow");
};

PinoccioLed.prototype.orange = function() {
  this.connection.command("led.orange");
};

PinoccioLed.prototype.white = function() {
  this.connection.command("led.white");
};

PinoccioLed.prototype.torch = function() {
  this.connection.command("led.torch");
};

PinoccioLed.prototype.hex = function(value) {
  var cmd = Util.format('led.sethex("%s")', value);
  this.connection.command(cmd);
};

PinoccioLed.prototype.rgb = function(r, g, b) {
  var cmd = Util.format('led.setrgb(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};

PinoccioLed.prototype.saveTorch = function(r, g, b) {
  var cmd = Util.format('led.savetorch(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};

PinoccioLed.prototype.blink = function(r, g, b) {
  var cmd = Util.format('led.blink(%s, %s, %s)', r, g, b);
  this.connection.command(cmd);
};
