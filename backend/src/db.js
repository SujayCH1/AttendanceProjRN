const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'attendance_app',
    port : '3306'
})

connection.connect((err) =>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Successfull");
        
    }
})

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }


}