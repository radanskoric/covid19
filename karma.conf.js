// Karma configuration

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
          'test/**/*_test.js'
        ],
        preprocessors: {
            'test/**/*_test.js': ['webpack']
        },
        webpack: require('./webpack.dev.js'),
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
        port: 9876,
        browsers: ['ChromeHeadless']
    });
};
