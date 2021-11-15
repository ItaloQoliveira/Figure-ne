const express = require('express')
const router = express.Router();
const Users = require('../model/user'); 


const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const createUserToken = (userid) =>{
    return jwt.sign({id: userid},process.env.TOKEN_PASS,{expiresIn:'30m'});
}


router.post('/create', async(req,res)=>{
    const {usuario,email, password} = req.body;

    if(!email || !password || !usuario) return res.status(400).send({error:'Houve um erro na criação de usuario, dados insuficientes'})

    try {
        if (await Users.findOne({email})) return res.status(400).send({error:'Usuário já cadastrado'});

        const user = await Users.create(req.body);
        user.password = undefined;
        return res.status(201).send({user,token: createUserToken(user.id)});


    } catch (err) {
        if(err) return res.status(500).send({error:'Erro ao buscar usuario'});
    }

})

router.post('/auth', async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) return res.status(400).send({error:'Houve um erro na autenticação de usuario, dados insuficientes'})

    try {
        const user = await Users.findOne({email}).select('+password');
        if(!user) return res.status(402).send({error:'Usuário não consta no banco de dados'});

        const passOk = await bcrypt.compare(password,user.password);
        if(!passOk) return res.status(401).send({error:'Erro ao autenticar usuário!'}); //aqui

        user.password = undefined;

        let token = createUserToken(user.id)

        res.cookie('token', `${token}`)//, { httpOnly: true })

        res.status(200).send("Autenticação realizada com sucesso, token aplicado!");


    } catch (err) {
        console.log("erro", err)
        return res.status(500).send({error:'erro ao buscar usuário'});
    }
})



module.exports = router;