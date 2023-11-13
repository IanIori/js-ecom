import { Router } from "express";
import CategoryModel from "../models/CategoryModel.js";
import Category from "../entities/category.js";

export default class CategoryRoutes{
    constructor(db) {
        this.db = new CategoryModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const categories = this.db.findAll()
            res.status(200).json(categories)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing category Id'})

            const category = this.db.findById(Number(id))
            if(!category) return res.status(404).json({error:'Category not found'})

            res.status(200).json(category)
        })

        router.post('/', (req,res) => {
            const {id,name,description} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing category Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing category name'})
            if(!description || description == "") return res.status(400).json({error:'Missing category description'})

            const category = new Category(id,name,description)
            this.db.create(category)
            res.status(201).json(category)
        })

        router.put('/:categoryId', (req,res) => {
            const {categoryId} = req.params
            const {id,name,description} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing category Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing category name'})
            if(!description || description == "") return res.status(400).json({error:'Missing category description'})

            const category = new Category(id,name,description)
            this.db.update(categoryId, category)
            res.status(200).json(category)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing category Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}