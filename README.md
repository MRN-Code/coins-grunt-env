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
        COINS_ENV: 'development'
    },
    staging: {
        NODE_ENV: 'staging',
        COINS_ENV: 'staging'
    },
    production: {
        NODE_ENV: 'production',
        COINS_ENV: 'production'
    }
};
```