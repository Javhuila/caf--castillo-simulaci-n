const pool=require('../../database');

module.exports=function(){
    async function crearjug(){
        let query1="INSERT INTO jugotable VALUES('5','Citrico','Piña-Granadilla-Maracuya','cifrut','4')"
    }
    async function modifijug(){
        let query2="UPDATE jugotable SET sabor_jugo='Salpicón' WHERE id=2"
    }
    async function listarjug(){
        let query="SELECT * FROM jugotable"
    }
    async function elimijug(){
        let query4="DELETE FROM jugotable WHERE id=3"
    }

    return{
        crearjug,
        modifijug,
        listarjug,
        elimijug
    }

}