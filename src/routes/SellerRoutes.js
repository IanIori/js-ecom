import { Router } from "express";
import SellerModel from "../models/SellerModel.js";
import Seller from "../entities/seller.js";

export default class Sellerrorutes{
    constructor(db) {
        this.db = new SellerModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const sellers = this.db.findAll()
            res.json(sellers)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Seller Id'})

            const seller = this.db.findById(Number(id))
            if(!seller) return res.status(404).json({error:'Seller not found'})

            res.json(seller)
        })

        router.post('/', (req,res) => {
            const {id,name,address,email,identifier} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Seller Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing Seller name'})
            if(!address || address == "") return res.status(400).json({error:'Missing Seller address'})
            if(!email || email == "") return res.status(400).json({error:'Missing Seller email'})
            if(!identifier || identifier == "") return res.status(400).json({error:'Missing Seller identifier'})


            const seller = new Seller(id,name,address,email,identifier)
            this.db.create(seller)
            res.status(201).json(seller)
        })

        router.put('/:SellerId', (req,res) => {
            const {sellerId} = req.params
            const {id,name,address,email,identifier} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Seller Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing Seller name'})
            if(!address || address == "") return res.status(400).json({error:'Missing Seller address'})
            if(!email || email == "") return res.status(400).json({error:'Missing Seller email'})
            if(!identifier|| identifier == "") return res.status(400).json({error:'Missing Seller identifier'})

            const seller = new Seller(id,name,address,email,identifier)
            this.db.update(sellerId, seller)
            res.status(200).json(seller)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Seller Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({errorr: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}