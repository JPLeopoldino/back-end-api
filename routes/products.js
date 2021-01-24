const express = require('express');
const { route } = require('.');
const router = express.Router();
const { Product } = require('../models');

router.get('/', async (req, res, next)=>{
    const token = req.headers.authorization;
    if(token=='ti-ara-2019'){
        const products = await Product.findAll();
        res.status(200).json(products);
    }
    res.status(401).send('Token não autorizado');
});

router.post('/', async (req, res, next)=>{
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

router.get('/:id', async (req, res, next)=>{
    const product = await Product.findAll(
        {
            where:{
                id: req.params.id
            }
        });
    res.status(200).json(...product);
});

router.get('/type/:productType', async (req, res, next)=>{
    const products = await Product.findAll(
        {
            where:{
                productType: req.params.productType
            }
        }
    );
    res.status(200).json(products);
});

router.get('/name/:productName', async (req, res, next)=>{
    const products = await Product.findAll(
        {
            where:{
                productName: req.params.productName
            }
        }
    );
    res.status(200).json(products);
});

router.delete('/:id', async (req, res, next)=>{
    const product = await Product.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(204).json(product);
});

router.put('/:id', async (req, res, next)=>{
    const product = await Product.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }    
    );
    res.status(204).json(...product);
});

module.exports = router;