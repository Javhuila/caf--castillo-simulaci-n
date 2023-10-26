const pool=require('../../database');

module.exports=function(){
    async function crearpro(datpro){
        let query1="INSERT INTO proftable SET ?";
        return await pool.query(query1,datpro);
    }
    async function modifipro(modpro){
        let query2="UPDATE proftable SET nombre=?, apellido=?, edad=?, asignatura=?, ciudad=? WHERE id=?"
        return await pool.query(query2,modpro);
    }
    async function listarpro(){
        let query3 = "SELECT * FROM proftable";
        return await pool.query(query3);
    }
    async function listarunopro(litunopro){
        let query5 = "SELECT * FROM proftable WHERE id=?";
        return await pool.query(query5,litunopro);
    }
    async function elimispro(elempro){
        let query4="DELETE FROM proftable WHERE id=?";
        return await pool.query(query4,elempro);

    }

    return{
        crearpro,
        modifipro,
        listarpro,
        elimispro,
        listarunopro
    }

}