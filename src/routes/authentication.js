const express= require('express');
const router= express.Router();

router.get('/att',(req,res)=>{
    res.send('es por aqui la autentificación');
});
module.exports= router;