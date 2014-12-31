"use strict";

var Cylon = require('cylon');

var PinoccioPower = module.exports = function PinoccioPower() {
  PinoccioPower.__super__.constructor.apply(this, arguments);
  this.commands = {
    percent: this.percent,
    voltage: this.voltage,
    report: this.report,

    is_charging: this.isCharging,

    enable_vcc: this.enableVcc,
    disable_vcc: this.disableVcc
  };
};

Cylon.Utils.subclass(PinoccioPower, Cylon.Driver);

PinoccioPower.prototype.start = function(callback) {
  callback();
};

PinoccioPower.prototype.halt = function(callback) {
  callback();
};

/**
 * Checks whether or not the Pinoccio's battery is charging
 *
 * @param {Function} callback to be triggered when information is available
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.isCharging = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%b", power.ischarging)', callback);
};

/**
 * Gets the current battery percentage
 *
 * @param {Function} callback to be triggered when information is available
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.percent = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%d", power.percent)', callback);
};

/**
 * Gets the current battery voltage
 *
 * @param {Function} callback to be triggered when information is available
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.voltage = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%d", power.voltage)', callback);
};

/**
 * Enables VCC on the battery
 *
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.enableVcc = function() {
  this.connection.command("power.enable_vcc");
};

/**
 * Disables VCC on the battery
 *
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.disableVcc = function() {
  this.connection.command("power.disable_vcc");
};

/**
 * Gets a report from the battery
 *
 * @param {Function} callback to be triggered when information is available
 * @return {null}
 * @publish
 */
PinoccioPower.prototype.report = function(callback) {
  callback = callback || function() {};
  this.connection.command('printf("%s", power.report)', callback);
};
