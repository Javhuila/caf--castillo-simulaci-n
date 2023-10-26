const AdobeProModels=require('../../modelos/adobem/AdobeProModels');

    async function creaproApi(req,res){

        const datpro = req.body;
        await AdobeProModels().crearpro(datpro);
        res.status(200).json({
        succes:1,
        message:"Ha sido agregado satisfactoriamente"
        })

    }
    
    async function modifproApi(req,res){

        const modpro=[
            req.body.nombre,
            req.body.apellido,
            req.body.edad,
            req.body.asignatura,
            req.body.ciudad,
            req.params.id
        ]
        await AdobeProModels().modifipro(modpro);
        res.status(200).json({
            succes:1,
            message:"Ha sido modificado satisfactoriamente"
        })

    }

    async function listaproApi(req,res){

        const listarTodopro = await AdobeProModels().listarpro();
        res.status(200).json(listarTodopro)

    }


    async function eleminarproApi(req,res){

        const elempro1 = req.params.id;
        await AdobeProModels().elimispro(elempro1);
        res.status(200).json({
            succes:1,
            message:"Ha sido eleminado satisfactoriamente"
        })
    }
    
    async function listarunproApi(req,res){
        const litunopro = req.params.id;
        const litunpro = await AdobeProModels().listarunopro(litunopro);
        res.status(200).json(litunpro)
    }


    module.exports= {
        creaproApi,
        modifproApi,
        listaproApi,
        eleminarproApi,
        listarunproApi

    }