const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
