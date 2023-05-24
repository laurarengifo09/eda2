const socketController =(socket, io)=>{
    console.log('cliente conectado', socket.id);

    socket.on('disconnect',()=>{
        console.log('cliente desconectado, socket.id');

    })

    socket.on('mensaje de cliente',(payload, callback)=>{
        callback('se recibio el mensaje');

        payload.from ='desde el server'
        socket.bradcast.emit('mensaje', payload)
    })
}

module.exports= {socketController}