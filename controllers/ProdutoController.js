const { json } = require('express')
const Produto = require("../models/produto")

const ProdutoController = {
    getAll: async (req, res) => {
        const filtros = {}
        const campos = Object.keys(Produto.schema.paths)

        for(let campo in req.query){
            if(campos.includes(campo)){
                filtros[campo] = {$regex: new RegExp(req.query[campo],'i')}
            }
        }


        //http://localhost:3000/produtos?tipo=pi 
        // ? significa o início da declaração das variáveis da url  
        // & separa as variáveis da url
 
        res.json(await Produto.find(filtros))


        // const tipo = req.query.tipo
        //  res.json(await Produto.find({tipo: {$regex: new RegExp(tipo,'i')}}))
    },
    get: async (req, res) => {

        try {
            res.json(await Produto.findById(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }

    },
    create: async (req, res) => {
        
        try {
            res.json(await Produto.create(req.body))

        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async (req, res) => {
        
        try {
            res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json(await Produto.findByIdAndDelete(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
}

module.exports = ProdutoController