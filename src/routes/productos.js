const express= require('express');
const router= express.Router();

router.get('/product2',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('administrador/productos');
});

module.exports= router;