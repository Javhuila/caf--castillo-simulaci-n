const JugosModels=require('../../modelos/jugom/JugosModels');

async function crearJugos(req,res){
    res.render('jugov/jugouno');
}
async function modificarJugos(req,res){
    res.render('jugov/jugouno');
}
async function listarJugos(req,res){
    res.render('jugov/jugouno');
}
async function eliminarJugos(req,res){
    res.render('jugov/jugouno');
}

module.exports= {
    crearJugos,
    modificarJugos,
    listarJugos,
    eliminarJugos


}