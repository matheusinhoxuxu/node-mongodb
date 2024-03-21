const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
})

const Produto = moongoose.model('Produto', schema)


module.exports = Produto