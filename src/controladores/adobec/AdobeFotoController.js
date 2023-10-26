const AdobeFotoModels=require('../../modelos/adobem/AdobeFotoModels');

    async function creafotoApi(req,res){

        const datfoto = req.body;
        await AdobeFotoModels().crearfoto(datfoto);
        res.status(200).json({
        succes:1,
        message:"Ha sido agregado satisfactoriamente"
        })

    }
    
    async function modiffotoApi(req,res){

        const modfoto=[
            req.body.nombre,
            req.body.apellido,
            req.body.edad,
            req.body.especialidad,
            req.body.ciudad,
            req.params.id
        ]
        await AdobeFotoModels().modififoto(modfoto);
        res.status(200).json({
            succes:1,
            message:"Ha sido modificado satisfactoriamente"
        })

    }

    async function listafotoApi(req,res){

        const listarTodofoto = await AdobeFotoModels().listarfoto();
        res.status(200).json(listarTodofoto)

    }


    async function eleminarfotoApi(req,res){

        const elemfoto1 = req.params.id;
        await AdobeFotoModels().elimisfoto(elemfoto1);
        res.status(200).json({
            succes:1,
            message:"Ha sido eleminado satisfactoriamente"
        })
    }
    
    async function listarunfotoApi(req,res){
        const litunofoto = req.params.id;
        const litunfoto = await AdobeFotoModels().listarunofoto(litunofoto);
        res.status(200).json(litunfoto)
    }


    module.exports= {
        creafotoApi,
        modiffotoApi,
        listafotoApi,
        eleminarfotoApi,
        listarunfotoApi

    }