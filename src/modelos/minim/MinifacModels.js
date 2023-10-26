const pool=require('../../database');

module.exports=function(){
    async function consulfacm(usuno,/*postuno*/){
        let query6 = "SELECT * FROM postfac WHERE id_usuario=?, id_post=?";
        return await pool.query(query6,usuno/*,postuno*/);

    }

    return{
        consulfacm
    }

}