module.exports = {
    dev: {
        devtoolType: 'cheap-module-eval-source-map',
        host: 'localhost',
        port: '2887',
        api: '/api',
        target: 'http://localhost:3000'
    },
    build: {
        devtoolType: 'cheap-module-eval-source-map',
        api: 'http://api.rosetta-latte.art'
    }
};
