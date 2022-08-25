const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})