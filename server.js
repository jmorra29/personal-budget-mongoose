const express = require('express');
const app = express();
const port = 3000;
const json = require('C:\\dev\\personal-budget\\budget.json');

app.use('/', express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(json);
});

app.listen(port, () => {
    console.log('Example app');
});