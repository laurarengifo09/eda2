const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { socketController } = require ()

const { dbConnection } = require('../Database/config');


class Server {
    constructor(){
        this.headers={
            cors:{
                origin: 'http://127.0.0.1:5173',
                methods:['GET','POST']
            }
        }

        this.app = express();
        this.port = process.env.PORT;
        this.server = require ('http').createServer(this.app);
        this.io = require ('socket.io')(this.server);

        this.connectToDb();
        this.setRoutes();
        this.sockets();

    }

    async connectToDb(){
        await dbConnection();
    }

    addMiddlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    setRoutes(){
        this.app.use('/pd',require('../routes/pedidos'))
        his.app.use('/cns',require('../routes/coordenadas'))

    }



        
    socket() {
        this.io.on("connection", socket =>{
            console.log('Cliente Conectado',socket.id);


            SocketAddress.on('disconnect',()=>{
                console.log('cliente desconectado')
            })
        })
     }

     listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en: ', this.port)
        })
     }



}

module.export= Server;