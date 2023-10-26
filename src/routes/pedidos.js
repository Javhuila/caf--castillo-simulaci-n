const express= require('express');
const router= express.Router();

router.get('/pedir2',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('administrador/pedidos');
});

module.exports= router;