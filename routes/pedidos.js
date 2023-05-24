const express = require ("express");
const pedidosSchema = require("../models/pedidos")

const router = express.Router();

router.post("/pedidos",(req,res)=>{
    const pedidos = pedidosSchema(req.body);
    pedidos.save().then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports = router;
