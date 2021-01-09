const express = require('express');
const router = express.Router();
const { Client } = require('../models');

router.post('/', async (req, res)=>{
    const client = await Client.create(req.body);
    res.json(client);
});

router.get('/', async (req, res)=>{
    const clients = await Client.findAll();
    res.json(clients);
});

router.delete('/:id', async (req, res)=>{
    const status = await Client.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(status);
});

router.put('/:id', async (req, res)=>{
    const client = await Client.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(client);
});

router.get('/:id', async (req, res)=>{
    const client = await Client.findAll(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(...client);
});

module.exports = router;