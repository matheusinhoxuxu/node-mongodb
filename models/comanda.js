const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: String,
})

const comanda = moongoose.model('comanda', schema)


module.exports = comanda