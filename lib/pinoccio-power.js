"use strict";

var Cylon = require('cylon'),
    Util = require('util');

var PinoccioPower = module.exports = function PinoccioPower(opts) {
  PinoccioPower.__super__.constructor.apply(this, arguments);
  this.commands = {
    percent: this.percent,
    voltage: this.voltage,
    report: this.report,

    is_charging: this.isCharging,

    enable_vcc: this.enableVcc,
    disable_vcc: this.disableVcc
  }
};

Cylon.Utils.subclass(PinoccioPower, Cylon.Driver);

PinoccioPower.prototype.start = function(callback) {
  callback();
};

PinoccioPower.prototype.halt = function(callback) {
  callback();
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
