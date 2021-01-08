const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('./models');

//CRUD - Create, Read, Update, Delete

app.use(bodyParser.json());

app.get('/', async (req, res)=>{
    res.send("Projeto em execução...");
});

app.post('/clients', async (req, res)=>{
    const client = await Client.create(req.body);
    res.json(client);
});

app.get('/clients', async (req, res)=>{
    const clients = await Client.findAll();
    res.json(clients);
});

app.delete('/clients/:id', async (req, res)=>{
    const status = await Client.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(status);
});

app.put('/clients/:id', async (req, res)=>{
    const client = await Client.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(client);
});

app.get('/clients/:id', async (req, res)=>{
    const client = await Client.findAll(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(...client);
});

app.listen(4000);