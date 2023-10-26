const AdobeEstModels=require('../../modelos/adobem/AdobeEstModels');

    async function creaestApi(req,res){

        const datest = req.body;
        await AdobeEstModels().crearest(datest);
        res.status(200).json({
        succes:1,
        message:"Ha sido agregado satisfactoriamente"
        })

    }
    
    async function modifestApi(req,res){

        const modest=[
            req.body.nombre,
            req.body.apellido,
            req.body.curso,
            req.body.edad,
            req.body.ciudad,
            req.params.id
        ]
        await AdobeEstModels().modifisest(modest);
        res.status(200).json({
            succes:1,
            message:"Ha sido modificado satisfactoriamente"
        })

    }

    async function listaestApi(req,res){

        const listarTodoest = await AdobeEstModels().listarest();
        res.status(200).json(listarTodoest)

    }


    async function eleminarestApi(req,res){

        const elemest1 = req.params.id;
        await AdobeEstModels().elimisest(elemest1);
        res.status(200).json({
            succes:1,
            message:"Ha sido eleminado satisfactoriamente"
        })
    }
    
    async function listarunestApi(req,res){
        const litunoest = req.params.id;
        const litunest = await AdobeEstModels().listarunest(litunoest);
        res.status(200).json(litunest)
    }


    module.exports= {
        creaestApi,
        modifestApi,
        listaestApi,
        eleminarestApi,
        listarunestApi

    }