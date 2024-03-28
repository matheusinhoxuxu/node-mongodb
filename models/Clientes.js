const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: String,
})

const Clientes = moongoose.model('Clientes', schema)


module.exports = Clientes