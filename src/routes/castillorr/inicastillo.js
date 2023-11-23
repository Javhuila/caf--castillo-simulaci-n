const express= require('express');
const router= express.Router();

router.get('/iniciar-sesion',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('castillov/inicastillo');
});

router.get('/nuevo-data',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('castillov/newcastillo');
});

router.get('/control',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('castillov/control');
});

module.exports= router;