/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, 'localhost', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});