const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  console.log('root route');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
