const mongoose = require ('mongoose');

const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI,{
            autoIndex: true,
        });

        console.log('DB ONLINE');
    }catch(error){
        console.log("error");
        throw new error ("no se inicio la base de datos")
    }
}

module.exports ={dbConnection}