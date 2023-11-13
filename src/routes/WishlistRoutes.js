import { Router } from "express";
import WishlistModel from "../models/WishlistModel.js";
import Wishlist from "../entities/wishlist.js";

export default class WishlistRoutes{
    constructor(db) {
        this.db = new WishlistModel(db)
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
            if(!id || id == "") return res.status(400).json({error:'Missing Wishlist Id'})

            const wishlist = this.db.findById(Number(id))
            if(!wishlist) return res.status(404).json({error:'Wishlist not found'})

            res.json(wishlist)
        })

        router.post('/', (req,res) => {
            const {id,customerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Wishlist Id'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Wishlist customer Id'})

            const wishlist = new Wishlist(id,customerId)
            this.db.create(wishlist)
            res.status(201).json(wishlist)
        })

        router.put('/:WishlistId', (req,res) => {
            const {wishlistId} = req.params
            const {id,customerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Wishlist Id'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Wishlist customer Id'})

            const wishlist = new Wishlist(id,customerId)
            this.db.update(wishlistId, wishlist)
            res.status(200).json(wishlist)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Wishlist Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}