const express= require('express');
const router= express.Router();
const PedidosController=require('../../controladores/pedidoc/PedidosController');


/* Rutas del servicio api en Postman */
router.get('/api/listpedido',PedidosController.listarPedidosApi);
router.get('/api/listpedidone/:id',PedidosController.listaUnopedApi);
router.get('/api/listpedpro/:id',PedidosController.listaUnopedproApi);
router.put('/api/actualizapedi/:id',PedidosController.actualizapedApi);



module.exports= router;