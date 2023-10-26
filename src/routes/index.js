const express= require('express');
const router= express.Router();

router.get('/',(req,res) =>{
    res.send('Sea Bienvenido a la clase de Electiva Complementaria Node Js Javascript Express');
});

module.exports= router;