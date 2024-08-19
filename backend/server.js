const express = require('express')
const app = express()
const pool = require ('./database.js')


app.use(express.json())




app.get('/produit', async(req,res) => {
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requête")
        const rows = await conn.query('select * from produit');
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
})


app.listen(3001, () => {
    console.log("Server à l'écoute")
})