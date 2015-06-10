# Cylon.js For Pinoccio

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This repository contains the Cylon.js adaptor for the [Pinoccio](https://pinocc.io/) mesh-networked microcontroller. The implementation uses the [Pinoccio-IO](https://github.com/soldair/pinoccio-io) node module from [@soldair](https://github.com/soldair/). Thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our
sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-pinoccio.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-pinoccio) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-pinoccio/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-pinoccio) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-pinoccio/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-pinoccio)

## How to Install

Install the module with:

    $ npm install cylon cylon-pinoccio

## How to Use

### Blink

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    pinoccio: {
      adaptor: 'pinoccio',
      token: '[your token]',
      troop: '[your troop ID]',
      scout: '[your scout ID]'
    }
  },

  devices: {
    led: { driver: 'led', pin: 'D5' }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
```

### Built-In Features

You can also access the built-in features of the Pinoccio such as the LED and Power status:

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    pinoccio: {
      adaptor: 'pinoccio',
      token: '[your token]',
      troop: '[your troop ID]',
      scout: '[your scout ID]'
    }
  },

  devices: {
    led: { driver: 'pinoccio-led' },
    power: { driver: 'pinoccio-power' },
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
```

We currently have drivers for the following built-in Pinoccio devices:

- LED
- Power

## How to Connect

You need to have an access token generated using the Pinoccio cloud. The easiest way to do this is to use curl:

    curl -X POST -v --data 'email=your@email.com&password=yourpassword' https://api.pinocc.io/v1/login

It will return a JSON payload that contains the access token:

    < HTTP/1.1 200 OK
    < content-type: application/json
    < Date: Sat, 21 Jun 2014 16:08:05 GMT
    < Connection: close
    < Transfer-Encoding: chunked
    <
    {"data":{"token":"thisisthetokenhere","account":1234,"perms":true}}

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-pinoccio/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-pinoccio/blob/master/RELEASES.md
).

## License

Copyright (c) 2014-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
