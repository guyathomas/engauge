const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const base = alphabet.length; // base is the length of the alphabet (58 in this case)
const axios = require( 'axios' );

module.exports.decode = function ( str ) {
  let decoded = 0;
  while ( str ) {
    const index = alphabet.indexOf( str[ 0 ]);
    const power = str.length - 1;
    decoded += index * ( Math.pow( base, power ) );
    str = str.substring( 1 );
  }
  return decoded;
};

module.exports.encode = function ( num ) {
  let encoded = '';
  while ( num ) {
    const remainder = num % base;
    num = Math.floor( num / base );
    encoded = alphabet[ remainder ].toString() + encoded;
  }
  return encoded;
};

module.exports.urlType = function ( url ) {
  const isImageURL = url.match( /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i );
  if ( isImageURL ) {
    return 'image';
  }
  return 'website';
};

module.exports.getScreenshot = async function ( targetURL ) {
  const response = await axios.post( 'http://screenshot:3002/capture', { targetURL });
  return response.data.Location;
};
