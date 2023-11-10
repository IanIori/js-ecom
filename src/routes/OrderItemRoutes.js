import { Router } from "express";
import OrderItemModel from "../models/OrderItemModel.js";
import OrderItem from "../entities/orderItem.js";

export default class OrderItemRoutes{
    constructor(db) {
        this.db = new OrderItemModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const orderitems = this.db.findAll()
            res.json(orderitems)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing OrderItem Id'})

            const orderItem = this.db.findById(Number(id))
            if(!orderItem) return res.status(404).json({error:'OrderItem not found'})

            res.json(orderItem)
        })

        router.post('/', (req,res) => {
            const {id,productId,quantity,sellerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing OrderItem Id'})
            if(!productId || productId == "") return res.status(400).json({erro:'Missing OrderItem product Id'})
            if(!quantity || quantity == "") return res.status(400).json({error:'Missing OrderItem quantity'})
            if(!sellerId || sellerId == "") return res.status(400).json({error:'Missing OrderItem seller Id'})

            const orderItem = new OrderItem(id,productId,quantity,sellerId)
            this.db.create(orderItem)
            res.status(201).json(orderItem)
        })

        router.put('/:OrderItemId', (req,res) => {
            const {orderItemId} = req.params
            const {id,productId,quantity,sellerId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing OrderItem Id'})
            if(!productId || productId == "") return res.status(400).json({error:'Missing OrderItem product Id'})
            if(!quantity || quantity == "") return res.status(400).json({error:'Missing OrderItem quantity'})
            if(!sellerId || sellerId == "") return res.status(400).json({error:'Missing OrderItem seller Id'})

            const orderItem = new OrderItem(id,productId,quantity,sellerId)
            this.db.update(orderItemId, orderItem)
            res.status(200).json(orderItem)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing OrderItem Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}