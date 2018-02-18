
import app from './app';

process.env.PORT = process.env.PORT || 3002;

const server = app.listen( process.env.PORT, '0.0.0.0', () => {
  console.log( `Screenshot server running at ${ JSON.stringify( server.address() ) }` );
});

export default server;
