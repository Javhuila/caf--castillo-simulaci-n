const express= require('express');
const router= express.Router();
const CastilloController=require('../../controladores/castilloc/CastilloController');

router.get('/castillotres',async(req,res)=>{
    //res.render->Reenviar o redireccionar
    res.render('castillov/castillo');
});

/* Rutas de Peticiones*/
router.get('/listcastillo',CastilloController.listarCastillo);

/* Rutas del servicio api en Postman */
router.get('/api/listcastillo',CastilloController.listarCastilloApi);

module.exports= router;