const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');

//CRUD - Create, Read, Update, Delete

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/clients', clientsRouter);


app.listen(4000);