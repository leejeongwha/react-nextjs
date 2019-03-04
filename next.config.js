const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(withSASS(withOptimizedImages({
    cssModules: true
})));