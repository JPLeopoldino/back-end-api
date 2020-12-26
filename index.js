const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá Express');
});

app.get('/nome', (req, res) => {
    res.send('João Pedro');
});

app.listen(4000);