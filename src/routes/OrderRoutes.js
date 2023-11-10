import { Router } from "express";
import OrderModel from "../models/OrderModel.js";
import Order from "../entities/order.js";

export default class OrderRoutes{
    constructor(db) {
        this.db = new OrderModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const orders = this.db.findAll()
            res.json(orders)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Order Id'})

            const order = this.db.findById(Number(id))
            if(!order) return res.status(404).json({error:'Order not found'})

            res.json(order)
        })

        router.post('/', (req,res) => {
            const {id,status,customerId,moment,items} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Order Id'})
            if(!status || status == "") return res.status(400).json({erro:'Missing Order status'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Order customer Id'})
            if(!moment || moment == "") return res.status(400).json({error:'Missing Order moment'})
            if(!items || items == "") return res.status(400).json({error:'Missing Order items'})

            const order = new Order(id,status,customerId,moment,items)
            this.db.create(order)
            res.status(201).json(order)
        })

        router.put('/:OrderId', (req,res) => {
            const {orderId} = req.params
            const {id,status,customerId,moment,items} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Order Id'})
            if(!status || status == "") return res.status(400).json({erro:'Missing Order status'})
            if(!customerId || customerId == "") return res.status(400).json({error:'Missing Order customer Id'})
            if(!moment || moment == "") return res.status(400).json({error:'Missing Order moment'})
            if(!items || items == "") return res.status(400).json({error:'Missing Order items'})


            const order = new Order(id,status,customerId,moment,items)
            this.db.update(orderId, order)
            res.status(200).json(order)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Order Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}