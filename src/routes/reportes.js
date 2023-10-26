const express= require('express');
const router= express.Router();

router.get('/report2',async(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('administrador/reportes');
});

module.exports= router;