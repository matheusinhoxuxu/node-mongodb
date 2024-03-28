const { json } = require('express');
const cliente = require("../models/cliente")

const clienteController = {
    getAll: async (req, res) => {
        res.json(await cliente.find())
    },
    get: async (req, res) => {

        try {
            res.json(await cliente.findById(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }

    },
    create: async (req, res) => {
        
        try {
            res.json(await cliente.create(req.body))

        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async (req, res) => {
        
        try {
            res.json(await cliente.findByIdAndUpdate(req.params.id, req.body))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json(await cliente.findByIdAndDelete(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
}

module.exports = clienteController