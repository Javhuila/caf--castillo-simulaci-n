const pool=require('../../database');

module.exports=function(){
    async function creargas(datagas){
        let query1="INSERT INTO gaseosatable SET ?";
        return await pool.query(query1,datagas);
    }
    async function modifigas(modgas){
        let query2="UPDATE gaseosatable SET nombre_gaseosa=?, sabor_gaseosa=?, marca_gaseosa=?, cantidad_gaseosa=? WHERE id=?"
        return await pool.query(query2,modgas);
    }
    async function listargas(){
        let query3 = "SELECT * FROM gaseosatable";
        return await pool.query(query3);
    }
    async function listarunogas(litunoga){
        let query5 = "SELECT * FROM gaseosatable WHERE id=?";
        return await pool.query(query5,litunoga);
    }
    async function elimigas(elegas){
        let query4="DELETE FROM gaseosatable WHERE id=?";
        return await pool.query(query4,elegas);

    }

    return{
        creargas,
        modifigas,
        listargas,
        elimigas,
        listarunogas
    }

}