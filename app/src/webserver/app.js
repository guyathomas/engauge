const express = require( 'express' );
const morgan = require( 'morgan' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );

const app = express();

// Setup logger
app.use( morgan( ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// Serve static assets
app.use( express.static( path.resolve( __dirname, '..', 'client' ) ) );

// Always return the main index.htmsl, so react-router render the route in the client
app.get( '*', ( req, res ) => {
  res.sendFile( path.resolve( __dirname, '..', 'client', 'index.html' ) );
});

module.exports = app;
