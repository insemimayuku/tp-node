const db = require('../database/database')

exports.getAllUsers = async (req, res) => {
    try{
        console.log("lancement de la requête d'affichage")
        const rows = await db.pool.query('Select * from user');
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
};

exports.getUserById = async (req,res) =>{
    //...
}