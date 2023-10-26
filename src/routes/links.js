const express= require('express');
const router= express.Router();

router.get('/add',(req,res)=>{
    //res.send('es por aqui el tema de los links');
    res.render('links/add');
});
module.exports= router;