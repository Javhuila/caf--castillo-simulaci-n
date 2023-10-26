const express= require('express');
const router= express.Router();
const GaseosasController=require('../../controladores/gaseosac/GaseosasController');

router.get('/gaseosatres',async(req,res)=>{
    //res.render->Reenviar o redireccionar
    res.render('gaseosav/gaseosauno');
});

/* Rutas de la vista */
router.post('/creargaseosa',GaseosasController.crearGaseosas);
router.post('/modfgaseosa/:id',GaseosasController.modificarGaseosas);
router.get('/listgaseosa',GaseosasController.listarGaseosas);
router.get('/elimgaseosa/:id',GaseosasController.eliminarGaseosas);
router.get('/listgas/:id',GaseosasController.listaUnoGas);


/* Rutas del servicio api en Postman */
router.post('/api/creargaseosa',GaseosasController.crearGaseosasApi);
router.get('/api/listgaseosa',GaseosasController.listarGaseosasApi);
router.put('/api/modfgaseosa/:id',GaseosasController.modificarGaseosasApi);
router.delete('/api/elimgaseosa/:id',GaseosasController.eliminarGaseosasApi);



module.exports= router;