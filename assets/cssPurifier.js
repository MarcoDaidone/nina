const purify = require('purify-css');

const content = ['*.html'];
const css = ['assets/bootstrap/bootstrap.min.css'];

const options = {
     output: 'purifyAndMinified.css',
     minify: true,
     info: true,
};

purify(content, css, options, function (purifiedAndMinifiedResult) {
     console.log(purifiedAndMinifiedResult);
});
