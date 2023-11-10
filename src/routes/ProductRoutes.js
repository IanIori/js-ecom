import { Router } from "express";
import ProductModel from "../models/ProductModel.js";
import Product from "../entities/product.js";

export default class ProductRoutes{
    constructor(db) {
        this.db = new ProductModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const products = this.db.findAll()
            res.json(products)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Product Id'})

            const product = this.db.findById(Number(id))
            if(!product) return res.status(404).json({error:'Product not found'})

            res.json(product)
        })

        router.post('/', (req,res) => {
            const {id,name,description,price,categoryId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Product Id'})
            if(!name || name == "") return res.status(400).json({erro:'Missing Product name'})
            if(!description || description == "") return res.status(400).json({error:'Missing Product description'})
            if(!price || price == "") return res.status(400).json({error:'Missing Product price'})
            if(!categoryId || categoryId == "") return res.status(400).json({error:'Missing Product category Id'})

            const product = new Product(id,name,description,price,categoryId)
            this.db.create(product)
            res.status(201).json(product)
        })

        router.put('/:ProductId', (req,res) => {
            const {productId} = req.params
            const {id,name,description,price,categoryId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Product Id'})
            if(!name || name == "") return res.status(400).json({erro:'Missing Product name'})
            if(!description || description == "") return res.status(400).json({error:'Missing Product description'})
            if(!price || price == "") return res.status(400).json({error:'Missing Product price'})
            if(!categoryId || categoryId == "") return res.status(400).json({error:'Missing Product category Id'})

            const product = new Product(id,name,description,price,categoryId)
            this.db.update(productId, product)
            res.status(200).json(product)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Product Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}