"use strict";

var Cylon = require('cylon'),
    Util = require('util');

var PinoccioPower = module.exports = function PinoccioPower(opts) {
  PinoccioPower.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(PinoccioPower, Cylon.Driver);

PinoccioPower.prototype.commands = [
  'isCharging', 'percent', 'voltage',
  'enableVcc', 'disableVcc', 'report'
];

PinoccioPower.prototype.start = function() {
  PinoccioPower.__super__.start.apply(this, arguments);
};

PinoccioPower.prototype.isCharging = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%b", power.ischarging)', callback);
};

PinoccioPower.prototype.percent = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%d", power.percent)', callback);
};

PinoccioPower.prototype.voltage = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%d", power.voltage)', callback);
};

PinoccioPower.prototype.enableVcc = function() {
  this.connection.command("power.enable_vcc");
};

PinoccioPower.prototype.disableVcc = function() {
  this.connection.command("power.disable_vcc");
};

PinoccioPower.prototype.report = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%s", power.report)', callback);
};
