const pool=require('../../database');

module.exports=function(){

    async function listarcastillo(){
        let query1 = "SELECT * FROM castillotable";
        return await pool.query(query1);
    }

    return{
        listarcastillo,
    }

}