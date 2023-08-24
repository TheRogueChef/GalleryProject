const express = require('express');
const app = express();
const port = 27017;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});