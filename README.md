# coins-grunt-env

We like [grunt-env](https://github.com/jsoverson/grunt-env) in our build process.  Our many repos all use it!

But why duplicate more than we have to?  This simple exported config enables us, in all of our projects, to always build with the latest COINS env config.

```js
// grunt/env.js
'use strict';
module.exports = require('coins-grunt-env');
```

What's in 'coins-grunt-env'?
```js
module.exports = {
    development: {
        NODE_ENV: 'development',
        COINS_ENV: 'development',
        COINS_NODE_API_SSL_PORT: 8443
    },
    staging: {
        NODE_ENV: 'staging',
        COINS_ENV: 'staging',
        COINS_NODE_API_HOSTNAME: 'stage-coins-api.mrn.org'
    },
    production: {
        NODE_ENV: 'production',
        COINS_ENV: 'production',
        COINS_NODE_API_HOSTNAME: 'coins-api.mrn.org'
    }
};
```
