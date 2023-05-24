const { default: mongoose } = require("mongoose");


const pedidosSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true

    },
    fecha:{
        type: Date,
        required: true
    },
    
})

module.exports = mongoose.model('pedidos',pedidosSchema)