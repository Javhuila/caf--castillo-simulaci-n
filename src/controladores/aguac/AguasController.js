const AguasModels=require('../../modelos/aguam/AguasModels');

async function crearAguas(req,res){
    res.render('aguav/aguauno');
}
async function modificarAguas(req,res){
    res.render('aguav/aguauno');
}
async function listarAguas(req,res){
    res.render('aguav/aguauno');
}
async function eliminarAguas(req,res){
    res.render('aguav/aguauno');
}

module.exports= {
    crearAguas,
    modificarAguas,
    listarAguas,
    eliminarAguas


}