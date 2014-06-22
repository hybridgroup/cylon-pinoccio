"use strict";

var Cylon = require('cylon'),
		Util = require('util');

var PinoccioPower = module.exports = function PinoccioPower(opts) {
  PinoccioPower.__super__.constructor.apply(this, arguments);
  this.commands = ['isCharging', 'percent', 'voltage', 
  								 'enableVcc', 'disableVcc', 'report'];
};

Cylon.Utils.subclass(PinoccioPower, Cylon.Driver);

PinoccioPower.prototype.start = function() {
  PinoccioPower.__super__.start.apply(this, arguments);
};

PinoccioPower.prototype.isCharging = function(cb) {
	if (cb === null) {
		cb = function(err, data){}
	}

  this.connection.command('printf("%b", power.ischarging)', cb);
};

PinoccioPower.prototype.percent = function(cb) {
	if (cb === null) {
		cb = function(err, data){}
	}

  this.connection.command('printf("%d", power.percent)', cb);
};

PinoccioPower.prototype.voltage = function(cb) {
	if (cb === null) {
		cb = function(err, data){}
	}

  this.connection.command('printf("%d", power.voltage)', cb);
};

PinoccioPower.prototype.enableVcc = function() {
  this.connection.command("power.enable_vcc");
};

PinoccioPower.prototype.disableVcc = function() {
  this.connection.command("power.disable_vcc");
};

PinoccioPower.prototype.report = function(cb) {
	if (cb === null) {
		cb = function(err, data){}
	}

  this.connection.command('printf("%s", power.report)', cb);
};
