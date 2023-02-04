const express = require('express');
const app = express();

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.listen(3000, () => {
  console.log('Note Taker app listening on port 3000!');
});