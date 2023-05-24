const express = require ("express")
const mongoose = require("mongoose");
const app = express();
require ("dotenv").config();

const http =  require ('http')
const server = http.createServer(app);
const {Server} = require("socket.io");
const { Socket } = require("dgram");
const coordenadas = require("./models/coordenadas");
const io = new Server(server);

const port = process.env.PORT || 4000;

app.use(express.json());
// app.use("/pd",pedidosRoutes);
// app.use("/",coordenadas)

app.get('/',(req,res)=>{
    res.send('a');
});

io.on('connection',(Socket)=>{
    console.log('un usuario esta conectado');
    Socket.emit("coordenadas",coordenadas)
    Socket.on('disconnected',()=>{
        console.log('usuario desconectado')
    })
})



mongoose.connect(
    process.env.MONGODB_URI).then(()=>console.log("conectado"))
    .catch((error)=>console.error(error));

app.listen(port,()=>console.log("escuchando en puerto",port));

