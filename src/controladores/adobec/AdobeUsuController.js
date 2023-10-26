const AdobeUsuModels=require('../../modelos/adobem/AdobeUsuModels');

    async function creaususApi(req,res){

        const datusu = req.body;
        await AdobeUsuModels().crearusu(datusu);
        res.status(200).json({
        succes:1,
        message:"Ha sido agregado satisfactoriamente"
        })

    }
    
    async function modifusuApi(req,res){

        const modusu=[
            req.body.nombre,
            req.body.apellido,
            req.body.edad,
            req.body.ciudad,
            req.params.id
        ]
        await AdobeUsuModels().modifisu(modusu);
        res.status(200).json({
            succes:1,
            message:"Ha sido modificado satisfactoriamente"
        })

    }

    async function listausuApi(req,res){

        const listarTodousu = await AdobeUsuModels().listarusu();
        res.status(200).json(listarTodousu)

    }


    async function eleminarusuApi(req,res){

        const elemusu1 = req.params.id;
        await AdobeUsuModels().elimisu(elemusu1);
        res.status(200).json({
            succes:1,
            message:"Ha sido eleminado satisfactoriamente"
        })
    }
    
    async function listarunusuApi(req,res){
        const litunosu = req.params.id;
        const litunsu = await AdobeUsuModels().listarunosu(litunosu);
        res.status(200).json(litunsu)
    }


    module.exports= {
        creaususApi,
        modifusuApi,
        listausuApi,
        eleminarusuApi,
        listarunusuApi

    }