import { Router } from "express";
import PaymentModel from "../models/PaymentModel.js";
import Payment from "../entities/payment.js";

export default class PaymentRoutes{
    constructor(db) {
        this.db = new PaymentModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const payments = this.db.findAll()
            res.json(payments)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing payment Id'})

            const payment = this.db.findById(Number(id))
            if(!payment) return res.status(404).json({error:'Payment not found'})

            res.json(payment)
        })

        router.post('/', (req,res) => {
            const {id,orderId,moment} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing payment Id'})
            if(!orderId || orderId == "") return res.status(400).json({erro:'Missing payment order Id'})
            if(!moment || moment == "") return res.status(400).json({error:'Missing payment moment'})
            
            const payment = new Payment(id,orderId,moment)
            this.db.create(payment)
            res.status(201).json(payment)
        })

        router.put('/:paymentId', (req,res) => {
            const {paymentId} = req.params
            const {id,orderId,moment} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing payment Id'})
            if(!orderId || orderId == "") return res.status(400).json({erro:'Missing payment order Id'})
            if(!moment || moment == "") return res.status(400).json({error:'Missing payment moment'})

            const payment = new Payment(id,orderId,moment)
            this.db.update(paymentId, payment)
            res.status(200).json(payment)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing payment Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}