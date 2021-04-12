const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

let todoItems = [];

app.get('/', (req, res) => {
  res.send({ todoItems });
});

app.post('/', bodyParser.json(), (req, res) => {
  res.send((todoItems = req.body));
});

app.listen(5000, () => {
  console.log('Aplicattion listening on port 5000');
});
