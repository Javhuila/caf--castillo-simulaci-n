const express= require('express');
const router= express.Router();
const ASPFController=require('../../controladores/aspfc/ASPFController');


/* Rutas del servicio api en Postman */
router.post('/api/regisdoc',ASPFController.CrearDocApi);
router.put('/api/asigmadoc/:id',ASPFController.AsigMatApi);
router.get('/api/listmat',ASPFController.ListaMatApi);
router.get('/api/listdoc',ASPFController.ListDocApi);
router.get('/api/listest',ASPFController.ListaEstApi);
router.post('/api/asigmaest',ASPFController.AsigEstApi);

module.exports= router;