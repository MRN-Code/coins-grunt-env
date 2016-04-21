module.exports = {
    development: {
        NODE_ENV: 'development',
        COINS_ENV: 'development',
        STEELPENNY_SSL_PORT: 8443,
        COINS_NODE_API_SSL_PORT: 8443, // deprecated
    },
    staging: {
        NODE_ENV: 'staging',
        COINS_ENV: 'staging',
        STEELPENNY_HOSTNAME: 'stage-coins-api.mrn.org',
        COINS_NODE_API_HOSTNAME: 'stage-coins-api.mrn.org', // deprecated
    },
    production: {
        NODE_ENV: 'production',
        COINS_ENV: 'production',
        STEELPENNY_HOSTNAME: 'coins-api.mrn.org',
        COINS_NODE_API_HOSTNAME: 'coins-api.mrn.org', // deprecated
    }
};
