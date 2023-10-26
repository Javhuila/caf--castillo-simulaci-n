const pool=require('../../database');

module.exports=function(){
    async function creardoc(datadoc){
        let query1="INSERT INTO docaspf SET ?";
        return await pool.query(query1,datadoc);
    }
    async function asignarmat(datasima){
        let query2="UPDATE docaspf SET mat_asignada=?";
        return await pool.query(query2,datasima);
    }
    async function listarmatt(){
        let query3 = "SELECT * FROM mataspf";
        return await pool.query(query3);
    }
    async function listardocc(){
        let query4 = "SELECT * FROM docaspf";
        return await pool.query(query4);
    }
    async function listarestt(){
        let query5 = "SELECT * FROM estaspf";
        return await pool.query(query5);
    }
    async function asignarest(datasigest){
        let query6="INSERT INTO estaspf SET ?";
        return await pool.query(query6,datasigest);
    }


    return{
        creardoc,
        asignarmat,
        listarmatt,
        listardocc,
        listarestt,
        asignarest
    }

}