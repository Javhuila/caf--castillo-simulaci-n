const ASPFModels=require('../../modelos/aspfm/ASPFModels');
    
    async function CrearDocApi(req,res){

        const datadoc = req.body;
        await ASPFModels().creardoc(datadoc);
        res.status(200).json({
        succes:1,
        message:"Ha sido registrado satisfactoriamente"
        })

    }

    async function AsigMatApi(req,res){
        const datasima=[
            req.body.mat_asignada,
            req.params.id
        ]
        await ASPFModels().asignarmat(datasima);
        res.status(200).json({
            succes:1,
            message:"Ha sido asignado a esa materia satisfactoriamente"
        })
    }

    async function ListaMatApi(req,res){
        const listarTodomat = await ASPFModels().listarmatt();
        res.status(200).json(listarTodomat)
    }

    async function ListDocApi(req,res){

        const listarTododoc = await ASPFModels().listardocc();
        res.status(200).json(listarTododoc)

    }

    async function ListaEstApi(req,res){

        const listarTodoest = await ASPFModels().listarestt();
        res.status(200).json(listarTodoest)

    }

    async function AsigEstApi(req,res){

        const datasigest = req.body;
        await ASPFModels().asignarest(datasigest);
        res.status(200).json({
        succes:1,
        message:"Ha sido registrado satisfactoriamente"
        })

    }

    module.exports= {
        CrearDocApi,
        AsigMatApi,
        ListaMatApi,
        ListDocApi,
        ListaEstApi,
        AsigEstApi
    }