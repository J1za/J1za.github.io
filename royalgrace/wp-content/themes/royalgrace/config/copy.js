const path = require('path');
module.exports = [
    { from: path.resolve(__dirname, '../src/assets/icons'), to: './icons' },
    { from: path.resolve(__dirname, '../src/assets/img'), to: './img' }
];
