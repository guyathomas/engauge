
const app = require( './app' );

process.env.PORT = process.env.PORT || 3001;

const server = app.listen( process.env.PORT, '0.0.0.0', () => {
  console.log( `Server running at ${ JSON.stringify( server.address() ) }` );
});

module.exports = server;
