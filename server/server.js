

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

        
        socket() {
            this.io.on("connection", socket =>{
                console.log('Cliente Conectado',socket.id);


                SocketAddress.on('disconnect',()=>{
                    console.log('cliente desconectado')
                })
            })
        }



    }
}