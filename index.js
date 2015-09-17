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
