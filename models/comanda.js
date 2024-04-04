const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: String,
    data: {
        type: Date,
        required:true,
        set: (value) => {
            const [dia,mes,ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    }
})

const comanda = moongoose.model('comanda', schema)


module.exports = comanda