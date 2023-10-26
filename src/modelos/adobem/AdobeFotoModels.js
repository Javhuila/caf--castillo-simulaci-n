const pool=require('../../database');

module.exports=function(){
    async function crearfoto(datfoto){
        let query1="INSERT INTO fototable SET ?";
        return await pool.query(query1,datfoto);
    }
    async function modififoto(modfoto){
        let query2="UPDATE fototable SET nombre=?, apellido=?, edad=?, especialidad=?, ciudad=? WHERE id=?"
        return await pool.query(query2,modfoto);
    }
    async function listarfoto(){
        let query3 = "SELECT * FROM fototable";
        return await pool.query(query3);
    }
    async function listarunofoto(litunofoto){
        let query5 = "SELECT * FROM fototable WHERE id=?";
        return await pool.query(query5,litunofoto);
    }
    async function elimisfoto(elemfoto){
        let query4="DELETE FROM fototable WHERE id=?";
        return await pool.query(query4,elemfoto);

    }

    return{
        crearfoto,
        modififoto,
        listarfoto,
        elimisfoto,
        listarunofoto
    }

}