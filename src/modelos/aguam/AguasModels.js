const pool=require('../../database');

module.exports=function(){
    async function crearagu(){
        let query1="INSERT INTO aguatable VALUES('6','Brisa','Botella Plastica','Cocacola','2')"
    }
    async function modifiagu(){
        let query2="UPDATE aguatable SET nombre_agua='Foca' WHERE id=1"
    }
    async function listaragu(){
        let query="select * from aguatable"
    }
    async function elimiagu(){
        let query4="DELETE FROM aguatable WHERE id=1"
    }

    return{
        crearagu,
        modifiagu,
        listaragu,
        elimiagu
    }

}