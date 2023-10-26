const PedidosModels=require('../../modelos/pedidom/PedidosModels');
    
    async function listarPedidosApi(req,res){

        const listarTodoped = await PedidosModels().listarped();
        res.status(200).json({listarTodoped})

    }

    async function listaUnopedApi(req,res){
        const litunope = req.params.id;
        const litunpe = await PedidosModels().listarunoped(litunope);
        res.status(200).json(litunpe)
    }

    async function listaUnopedproApi(req,res){
        const litunopepro = req.params.id;
        const litunpepro = await PedidosModels().listarunopedpro(litunopepro);
        res.status(200).json(litunpepro)
    }

    async function actualizapedApi(req,res){

        const actped=[
            req.body.valor,
            req.body.cant,
            req.body.valor_unitario,
            req.params.id
        ]
        await PedidosModels().actualped(actped);
        res.status(200).json({
            succes:1,
            message:"Ha sido actualizado satisfactoriamente"
        })

    }

    module.exports= {
        listarPedidosApi,
        listaUnopedApi,
        listaUnopedproApi,
        actualizapedApi

    }