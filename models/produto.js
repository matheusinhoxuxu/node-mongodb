const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: {type: String, required: true, uppercase: true, minLength: 7, maxLength: 20,trim:true},
    preco: {type: Number,min: [0, 'mais fácil '], default: 0,match: /^\d+(\.\d{1,2})?$/   },
    tamanho: {type:String,minLength: 2, maxLength: 3, required:true },
    tipo: {type: String, enum:["bebidas","pizzas","Massas","sobremesas"]},
    ingredientes:[{
        nome: {
            type: String,
            required: true,
            minLength: 2,
            maxLength:100,
            trim:true
        }
    }]
})

const Produto = moongoose.model('Produto', schema)


module.exports = Produto