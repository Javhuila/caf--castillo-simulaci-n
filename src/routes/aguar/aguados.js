const express= require('express');
const router= express.Router();
const AguasController=require('../../controladores/aguac/AguasController');

router.get('/aguatres',async(req,res)=>{
    //res.render->Reenviar o redireccionar
    res.render('aguav/aguauno');
});
router.get('/crearagua',AguasController.crearAguas);
router.get('/modfagua',AguasController.modificarAguas);
router.get('/listagua',AguasController.listarAguas);
router.get('/elimagua',AguasController.eliminarAguas);

module.exports= router;