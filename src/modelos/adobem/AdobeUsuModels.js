const pool=require('../../database');

module.exports=function(){
    async function crearusu(datusu){
        let query1="INSERT INTO usutable SET ?";
        return await pool.query(query1,datusu);
    }
    async function modifisu(modusu){
        let query2="UPDATE usutable SET nombre=?, apellido=?, edad=?, ciudad=? WHERE id=?"
        return await pool.query(query2,modusu);
    }
    async function listarusu(){
        let query3 = "SELECT * FROM usutable";
        return await pool.query(query3);
    }
    async function listarunosu(litunosu){
        let query5 = "SELECT * FROM usutable WHERE id=?";
        return await pool.query(query5,litunosu);
    }
    async function elimisu(elemusu){
        let query4="DELETE FROM usutable WHERE id=?";
        return await pool.query(query4,elemusu);

    }

    return{
        crearusu,
        modifisu,
        listarusu,
        elimisu,
        listarunosu
    }

}