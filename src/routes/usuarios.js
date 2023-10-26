const express= require('express');
const router= express.Router();

router.get('/user2',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('administrador/usuarios');
});

module.exports= router;