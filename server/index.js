const express = require('express');
const path = require('path');
//helloe
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`connected to http://localhost:${port}`);
})