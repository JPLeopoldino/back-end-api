const express = require('express');
const router = express.Router();
const { Client } = require('../models');

router.post('/', async (req, res)=>{
    const client = await Client.create(req.body);
    res.status(201).json(client);
});

router.get('/', async (req, res)=>{
    const clients = await Client.findAll();
    res.status(200).json(clients);
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
    res.status(200).json(...client);
});

module.exports = router;