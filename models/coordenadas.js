const { default: mongoose } = require("mongoose");


const coordenadasSchema = mongoose.Schema({
    x:{
        type:Number,
        required: true
    },
    y:{
        type:Number,
        required:true
    },
    pedido_id:{
        type: Number,
        required: true
    }
})

module.exports= mongoose.model('coordenadas',coordenadasSchema)