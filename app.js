const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('src'));

app.get('/', (req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
