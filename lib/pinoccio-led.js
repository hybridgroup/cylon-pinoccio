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

PinoccioLed.prototype.start = function(callback) {
  callback();
};

PinoccioLed.prototype.halt = function(callback) {
  callback();
};

PinoccioLed.prototype.turnOn = function() {
  this.adaptor.command("led.on");
};

PinoccioLed.prototype.turnOff = function() {
  this.adaptor.command("led.off");
};

PinoccioLed.prototype.red = function() {
  this.adaptor.command("led.red");
};

PinoccioLed.prototype.green = function() {
  this.adaptor.command("led.green");
};

PinoccioLed.prototype.blue = function() {
  this.adaptor.command("led.blue");
};

PinoccioLed.prototype.cyan = function() {
  this.adaptor.command("led.cyan");
};

PinoccioLed.prototype.purple = function() {
  this.adaptor.command("led.purple");
};

PinoccioLed.prototype.magenta = function() {
  this.adaptor.command("led.magenta");
};

PinoccioLed.prototype.yellow = function() {
  this.adaptor.command("led.yellow");
};

PinoccioLed.prototype.orange = function() {
  this.adaptor.command("led.orange");
};

PinoccioLed.prototype.white = function() {
  this.adaptor.command("led.white");
};

PinoccioLed.prototype.torch = function() {
  this.adaptor.command("led.torch");
};

PinoccioLed.prototype.hex = function(value) {
  var cmd = Util.format('led.sethex("%s")', value);
  this.adaptor.command(cmd);
};

PinoccioLed.prototype.rgb = function(r, g, b) {
  var cmd = Util.format('led.setrgb(%s, %s, %s)', r, g, b);
  this.adaptor.command(cmd);
};

PinoccioLed.prototype.saveTorch = function(r, g, b) {
  var cmd = Util.format('led.savetorch(%s, %s, %s)', r, g, b);
  this.adaptor.command(cmd);
};

PinoccioLed.prototype.blink = function(r, g, b) {
  var cmd = Util.format('led.blink(%s, %s, %s)', r, g, b);
  this.adaptor.command(cmd);
};
