const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(port);

console.log(`API Rest rodando na porta ${port}...`);


