const pool=require('../../database');

module.exports=function(){
    async function crearest(datest){
        let query1="INSERT INTO esttable SET ?";
        return await pool.query(query1,datest);
    }
    async function modifisest(modest){
        let query2="UPDATE esttable SET nombre=?, apellido=?, curso=?, edad=?, ciudad=? WHERE id=?"
        return await pool.query(query2,modest);
    }
    async function listarest(){
        let query3 = "SELECT * FROM esttable";
        return await pool.query(query3);
    }
    async function listarunest(litunoest){
        let query5 = "SELECT * FROM esttable WHERE id=?";
        return await pool.query(query5,litunoest);
    }
    async function elimisest(elemest){
        let query4="DELETE FROM esttable WHERE id=?";
        return await pool.query(query4,elemest);

    }

    return{
        crearest,
        modifisest,
        listarest,
        elimisest,
        listarunest
    }

}