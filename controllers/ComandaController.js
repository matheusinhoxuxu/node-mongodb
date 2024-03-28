const { json } = require('express');
const comanda = require("../models/comanda")

const comandaController = {
    getAll: async (req, res) => {
        res.json(await comanda.find())
    },
    get: async (req, res) => {

        try {
            res.json(await comanda.findById(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }

    },
    create: async (req, res) => {
        
        try {
            res.json(await comanda.create(req.body))

        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async (req, res) => {
        
        try {
            res.json(await comanda.findByIdAndUpdate(req.params.id, req.body))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json(await comanda.findByIdAndDelete(req.params.id))

        } catch (error) {
            res.status(404).json({error: 'registro não encontrado!'})
        }
    },
}

module.exports = comandaController