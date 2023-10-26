const MinifacModels=require('../../modelos/minim/MinifacModels');



    async function consultarpost(req,res){
        const usuno = req.params.id_usuario;
        /*const postuno =req.params.id_post;*/
        const usupost = await MinifacModels().consulfacm(usuno/*,postuno*/);
        res.render('minifacv/minifac',{usupost});
    }

module.exports={
    consultarpost
}