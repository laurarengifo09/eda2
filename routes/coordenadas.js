const express = require ("express");
const coordenadasSchema = require ("../models/coordenadas");

const router = express.Router();

router.post("/coordenadas",(req,res)=>{
    const coordenada = coordenadasSchema(req.body);
    coordenada.save().then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports = router;