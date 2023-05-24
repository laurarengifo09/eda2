

const express = require ("express")
const mongoose = require("mongoose");
const app = express();
require ("dotenv").config();
const io = require("socket.io")(this.server);


const pedidosRoute =require ("./routes/pedidos");
const cdnRoute= require ("./routes/coordenadas");
const { socketController } = require("./sockets/controller");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("api",pedidosRoute);
app.use("api",cdnRoute);


app.get('/',(req,res)=>{
    res.send('a');
});


io.on("connection", (socket) => {
    console.log("usuario conectado", socket.id);
    socket.on('mensaje-cliente',(payload, callback)=>{
        console.log(payload);
        callback('coordenadas-recibidas');

        payload.from = 'desde el server'
        this.io.emit('mensaje-de-server', payload);


    })
    socket.on('desconectado',()=>{
        console.log('cliente desconectado')
    })

    this.io.on(
        'connection',
        socket =>socketController(socket, this.io)
    )
  

  });




mongoose.connect(
    process.env.MONGODB_URI).then(()=>console.log("conectado"))
    .catch((error)=>console.error(error));

app.listen(port,()=>console.log("escuchando en puerto",port));



