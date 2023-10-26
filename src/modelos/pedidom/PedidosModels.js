const pool=require('../../database');

module.exports=function(){
    async function listarped(){
        let query3 = "SELECT * FROM pedidotable";
        return await pool.query(query3);
    }
    async function listarunoped(litunope){
        let query6 = "SELECT * FROM pedidotable WHERE cod_pedido=?";
        return await pool.query(query6,litunope);
    }
    async function listarunopedpro(litunopepro){
        let query6 = "SELECT * FROM productosped WHERE id=?";
        return await pool.query(query6,litunopepro);
    }
    async function actualped(actped){
        let query2="UPDATE pedidotable SET valor=?, cant=?, valor_unitario=? WHERE cod_pedido=?"
        return await pool.query(query2,actped);
    }




    return{
        listarped,
        listarunoped,
        listarunopedpro,
        actualped
    }

}