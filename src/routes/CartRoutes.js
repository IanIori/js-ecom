import { Router } from "express";
import CartModel from "../models/CartModel.js";
import Cart from "../entities/cart.js";

export default class CartRoutes{
    constructor(db) {
        this.db = new CartModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const wishlists = this.db.findAll()
            res.json(wishlists)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Cart Id'})

            const cart = this.db.findById(Number(id))
            if(!cart) return res.status(404).json({error:'Cart not found'})

            res.json(cart)
        })

        router.post('/', (req,res) => {
            const {id,customerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Cart Id'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Cart customer Id'})

            const cart = new Cart(id,customerId)
            this.db.create(cart)
            res.status(201).json(cart)
        })

        router.put('/:CartId', (req,res) => {
            const {cartId} = req.params
            const {id,customerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Cart Id'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Cart customer Id'})

            const cart = new Cart(id,customerId)
            this.db.update(cartId, cart)
            res.status(200).json(cart)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Cart Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}