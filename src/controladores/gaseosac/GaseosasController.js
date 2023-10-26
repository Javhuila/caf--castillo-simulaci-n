const GaseosasModels=require('../../modelos/gaseosam/GaseosasModels');

    async function crearGaseosas(req,res){

        const datagas = req.body;
        await GaseosasModels().creargas(datagas);
        req.flash('msncreate','Ha sido agregado satisfactoriamente')
        res.redirect('/liqgaseosa/listgaseosa');

    }

    async function crearGaseosasApi(req,res){

        const datagas = req.body;
        await GaseosasModels().creargas(datagas);
        res.status(200).json({
        succes:1,
        message:"Ha sido agregado satisfactoriamente"
        })

    }
    
    async function modificarGaseosas(req,res){

        const modgas=[
            req.body.nombre_gaseosa,
            req.body.sabor_gaseosa,
            req.body.marca_gaseosa,
            req.body.cantidad_gaseosa,
            req.params.id
        ]
        await GaseosasModels().modifigas(modgas);
        req.flash('msncreate','Ha sido modificado satisfactoriamente')
        res.redirect('/liqgaseosa/listgaseosa');
    }

    async function modificarGaseosasApi(req,res){

        const modgas=[
            req.body.nombre_gaseosa,
            req.body.sabor_gaseosa,
            req.body.marca_gaseosa,
            req.body.cantidad_gaseosa,
            req.params.id
        ]
        await GaseosasModels().modifigas(modgas);
        res.status(200).json({
            succes:1,
            message:"Ha sido modificado satisfactoriamente"
        })

    }

    async function listarGaseosas(req,res){

        const listarTodogas = await GaseosasModels().listargas();
        console.log(listarTodogas)
        res.render('gaseosav/gaseosauno',{listarTodogas});
    }
    
    async function listaUnoGas(req,res){
        const litunoga = req.params.id;
        const litungas = await GaseosasModels().listarunogas(litunoga);
        res.render('gaseosav/gaseosados',{litungas});
    }


    async function listarGaseosasApi(req,res){

        const listarTodogas = await GaseosasModels().listargas();
        res.status(200).json(listarTodogas)

    }

    async function eliminarGaseosas(req,res){

        const elegas1 = req.params.id;
        await GaseosasModels().elimigas(elegas1);
        req.flash('msncreate','Ha sido eleminado satisfactoriamente')
        res.redirect('/liqgaseosa/listgaseosa');
    }

    async function eliminarGaseosasApi(req,res){

        const elegas1 = req.params.id;
        await GaseosasModels().elimigas(elegas1);
        res.status(200).json({
            succes:1,
            message:"Ha sido eleminado satisfactoriamente"
        })
    }
    

    module.exports= {
        crearGaseosas, 
        modificarGaseosas,
        listarGaseosas,
        eliminarGaseosas,
        crearGaseosasApi,
        modificarGaseosasApi,
        listarGaseosasApi,
        eliminarGaseosasApi,
        listaUnoGas

    }