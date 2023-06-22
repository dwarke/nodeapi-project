const mysql = require ('mysql');
const {DB_HOST,DB_PASSWORD,DB_USER,DB_NAME} = process.env;
const con =  mysql.createConnection({
    database : DB_NAME,
    host: DB_HOST,  
    user:DB_USER,  
    password :DB_PASSWORD 
});

con.connect((err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(DB_NAME +" mysql connect...");
})

module.exports = con