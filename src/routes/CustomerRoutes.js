import { Router } from "express";
import CustomerModel from "../models/CustomerModel.js";
import Customer from "../entities/customer.js";

export default class Customerrorutes{
    constructor(db) {
        this.db = new CustomerModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const customers = this.db.findAll()
            res.json(customers)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Customer Id'})

            const customer = this.db.findById(Number(id))
            if(!customer) return res.status(404).json({error:'Customer not found'})

            res.json(customer)
        })

        router.post('/', (req,res) => {
            const {id,name,address,email,cpf} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Customer Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing Customer name'})
            if(!address || address == "") return res.status(400).json({error:'Missing Customer address'})
            if(!email || email == "") return res.status(400).json({error:'Missing Customer email'})
            if(!cpf || cpf == "") return res.status(400).json({error:'Missing Customer CPF'})


            const customer = new Customer(id,name,address,email,cpf)
            this.db.create(customer)
            res.status(201).json(customer)
        })

        router.put('/:CustomerId', (req,res) => {
            const {customerId} = req.params
            const {id,name,address,email,cpf} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Customer Id'})
            if(!name || name == "") return res.status(400).json({error:'Missing Customer name'})
            if(!address || address == "") return res.status(400).json({error:'Missing Customer address'})
            if(!email || email == "") return res.status(400).json({error:'Missing Customer email'})
            if(!cpf || cpf == "") return res.status(400).json({error:'Missing Customer CPF'})

            const customer = new Customer(id,name,address,email,cpf)
            this.db.update(customerId, customer)
            res.status(200).json(customer)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Customer Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({errorr: 'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}