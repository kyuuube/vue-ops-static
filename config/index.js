module.exports = {
    dev: {
        devtoolType: 'cheap-module-eval-source-map',
        host: 'localhost',
        port: '2887',
        api: '/api',
        target: 'http://api.kyube.cloud'
    },
    build: {
        devtoolType: 'cheap-module-eval-source-map',
        api: 'http://api.kyube.cloud'
    }
};
