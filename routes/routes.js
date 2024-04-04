const express = require('express')
const comandaController = require('../controllers/ComandaController')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../models/produto')
const router = express.Router()

router.get('/', function(req,res){
    res.json({})
})
// produtos
router.get('/produtos', (req,res) => ProdutoController.getAll(req,res))
router.post('/produtos', (req,res) => ProdutoController.create(req,res))
router.get('/produtos/:id', (req,res) => ProdutoController.get(req,res))
router.put('/produtos/:id', (req,res) => ProdutoController.update(req,res))
router.delete('/produtos/:id', (req,res) => ProdutoController.delete(req,res))

//comandas
router.get('/comandas', (req,res) => comandaController.getAll(req,res))
router.post('/comandas', (req,res) => comandaController.create(req,res))
router.get('/comandas/:id', (req,res) => comandaController.get(req,res))
router.put('/comandas/:id', (req,res) => comandaController.update(req,res))
router.delete('/comandas/:id', (req,res) => comandaController.delete(req,res))



module.exports = router