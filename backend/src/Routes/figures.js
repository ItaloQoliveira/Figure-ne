const express = require('express')
const router = express.Router();
const figures = require('../model/figures'); 



router.post('/add', async(req,res)=>{
    const {nome,serie,preco,altura,url,email} = req.body;

    if(!nome || !serie || !preco || !altura || !url || !email) return res.status(400).send({error:'Houve um erro no registro de figure, dados insuficientes'})

    try {
        
        const figure = await figures.create(req.body);
        
        return res.status(201).send({figure});


    } catch (err) {
        return res.status(500).send({error:err});
    }

})




module.exports = router;