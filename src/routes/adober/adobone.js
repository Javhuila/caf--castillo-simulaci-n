const express= require('express');
const router= express.Router();
const AdobeUsuController=require('../../controladores/adobec/AdobeUsuController');
const AdobeEstController=require('../../controladores/adobec/AdobeEstController');
const AdobeProController=require('../../controladores/adobec/AdobeProController');
const AdobeFotoController=require('../../controladores/adobec/AdobeFotoController');

/* Rutas del servicio api en Postman - Adobe usuario */
router.post('/api/crearusu',AdobeUsuController.creaususApi);
router.get('/api/listarusu/',AdobeUsuController.listausuApi);
router.get('/api/listarunusu/:id',AdobeUsuController.listarunusuApi);
router.put('/api/modfusu/:id',AdobeUsuController.modifusuApi);
router.delete('/api/eliminusu/:id',AdobeUsuController.eleminarusuApi);

/* Rutas del servicio api en Postman - Adobe estudiante */
router.post('/api/crearest',AdobeEstController.creaestApi);
router.get('/api/listarest/',AdobeEstController.listaestApi);
router.get('/api/listarunest/:id',AdobeEstController.listarunestApi);
router.put('/api/modfest/:id',AdobeEstController.modifestApi);
router.delete('/api/eliminest/:id',AdobeEstController.eleminarestApi);

/* Rutas del servicio api en Postman - Adobe profesor */
router.post('/api/crearpro',AdobeProController.creaproApi);
router.get('/api/listarpro/',AdobeProController.listaproApi);
router.get('/api/listarunpro/:id',AdobeProController.listarunproApi);
router.put('/api/modfpro/:id',AdobeProController.modifproApi);
router.delete('/api/eliminpro/:id',AdobeProController.eleminarproApi);

/* Rutas del servicio api en Postman - Adobe fotografia */
router.post('/api/crearfoto',AdobeFotoController.creafotoApi);
router.get('/api/listarfoto/',AdobeFotoController.listafotoApi);
router.get('/api/listarunfoto/:id',AdobeFotoController.listarunfotoApi);
router.put('/api/modffoto/:id',AdobeFotoController.modiffotoApi);
router.delete('/api/eliminfoto/:id',AdobeFotoController.eleminarfotoApi);

module.exports= router;