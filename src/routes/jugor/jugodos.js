const express= require('express');
const router= express.Router();
const JugosController=require('../../controladores/jugoc/JugosController');

router.get('/jugotres',async(req,res)=>{
    //res.render->Reenviar o redireccionar
    res.render('jugov/jugouno');
});
router.get('/crearjugo',JugosController.crearJugos);
router.get('/modfjugo',JugosController.modificarJugos);
router.get('/listjugo',JugosController.listarJugos);
router.get('/elimjugo',JugosController.eliminarJugos);

module.exports= router;