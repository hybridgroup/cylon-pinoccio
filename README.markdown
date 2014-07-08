# Cylon.js For Pinoccio

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for the [Pinoccio](https://pinocc.io/) mesh-networked microcontroller. The implementation uses the [Pinoccio-IO](https://github.com/soldair/pinoccio-io) node module from [@soldair](https://github.com/soldair/). Thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our
sister project Gobot (http://gobot.io).

For more information about Cylon, check out our repo at
https://github.com/hybridgroup/cylon

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-pinoccio.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-pinoccio)

## Getting Started

Install the module with: `npm install cylon-pinoccio`

## Examples

### Blink

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: '[your token]',
    troop: '[your troop ID]',
    scout: '[your scout ID]'
  },

  device: { name: 'led', driver: 'led', pin: 'D5' },

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
  connection: {
    name: 'pinoccio',
    adaptor: 'pinoccio',
    token: '[your token]',
    troop: '[your troop ID]',
    scout: '[your scout ID]' },
  device: {name: 'led', driver: 'pinoccio-led'},
  device: {name: 'power', driver: 'pinoccio-power'},

  work: function(my) {
    every((1).second(),
    my.led.toggle);
  }
}).start();
```

We currently have drivers for the following built-in Pinoccio devices:

- LED
- Power

## Connecting

You need to have an access token generated using the Pinoccio cloud. The easiest way to do this is to use curl:
```
curl -X POST -v --data 'email=your@email.com&password=yourpassword' https://api.pinocc.io/v1/login
```

It will return a JSON payload that contains the access token:
```
< HTTP/1.1 200 OK
< content-type: application/json
< Date: Sat, 21 Jun 2014 16:08:05 GMT
< Connection: close
< Transfer-Encoding: chunked
<
{"data":{"token":"thisisthetokenhere","account":1234,"perms":true}}
```

## Documentation
We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.3.0 - Compatability with Cylon 0.16.0

Version 0.1.0 - Initial release

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.
