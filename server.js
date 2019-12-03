const express = require('express');

const app = express();
const port = 3001

app.get('/', (req, res) => {
  res.send(`API Rest rodando na porta ${port}...`);

});


app.listen(port);

console.log(`API Rest rodando na porta ${port}...`);


