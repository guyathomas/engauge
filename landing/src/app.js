const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname)));

// Always return the main index.html, so react-router render the route in the client

app.use('/api', proxy('http://app:3000'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

module.exports = app;
