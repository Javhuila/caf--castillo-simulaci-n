const CastilloModels=require('../../modelos/castillom/CastilloModels');

async function listarCastillo(req,res){

    const listarTodocastillo = await CastilloModels().listarcastillo();
    console.log(listarTodocastillo)
    res.render('castillov/castillo',{listarTodocastillo});
}

async function listarCastilloApi(req,res){

    const listarTodocastillo = await CastilloModels().listarcastillo();
    res.status(200).json(listarTodocastillo)

}


module.exports= {
    listarCastillo,
    listarCastilloApi
}