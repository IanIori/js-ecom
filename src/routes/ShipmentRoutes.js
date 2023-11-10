import { Router } from "express";
import ShipmentModel from "../models/ShipmentModel.js";
import Shipment from "../entities/shipment.js";

export default class ShipmentRoutes{
    constructor(db) {
        this.db = new ShipmentModel(db)
    }

    //use validator library
    routes() {
        const router = Router()

        router.get('/', (req,res) => {
            const shipments = this.db.findAll()
            res.json(shipments)
        })

        router.get('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Shipment Id'})

            const shipment = this.db.findById(Number(id))
            if(!shipment) return res.status(404).json({error:'Shipment not found'})

            res.json(shipment)
        })

        router.post('/', (req,res) => {
            const {id,date,address,city,state,zip_code,orderId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Shipment Id'})
            if(!date || date == "") return res.status(400).json({erro:'Missing Shipment date'})
            if(!address || address == "") return res.status(400).json({error:'Missing Shipment address'})
            if(!city || city == "") return res.status(400).json({erro:'Missing Shipment city'})
            if(!state || state== "") return res.status(400).json({erro:'Missing Shipment state'})
            if(!zip_code|| zip_code == "") return res.status(400).json({erro:'Missing Shipment zip code'})
            if(!orderId || orderId == "") return res.status(400).json({erro:'Missing Shipment order Id'})

            const shipment = new Shipment(id,date,address,city,state,zip_code,orderId)
            this.db.create(shipment)
            res.status(201).json(shipment)
        })

        router.put('/:ShipmentId', (req,res) => {
            const {shipmentId} = req.params
            const {id,date,address,city,state,zip_code,orderId} = req.body

            if(!id || id == "") return res.status(400).json({error:'Missing Shipment Id'})
            if(!date || date == "") return res.status(400).json({error:'Missing Shipment date'})
            if(!address || address == "") return res.status(400).json({error:'Missing Shipment address'})
            if(!city || city == "") return res.status(400).json({error:'Missing Shipment city'})
            if(!state || state== "") return res.status(400).json({error:'Missing Shipment state'})
            if(!zip_code|| zip_code == "") return res.status(400).json({error:'Missing Shipment zip code'})
            if(!orderId || orderId == "") return res.status(400).json({error:'Missing Shipment order Id'})

            const shipment = new Shipment(id,date,address,city,state,zip_code,orderId)
            this.db.update(shipmentId, shipment)
            res.status(200).json(shipment)
        })

        router.delete('/:id', (req,res) => {
            const {id} = req.params
            if(!id || id == "") return res.status(400).json({error:'Missing Shipment Id'})

            const result = this.db.delete(Number(id))
            if(!result) return res.status(404).json({error:'Item not found for deletion'})

            return res.status(204).send()
        })

        return router
    }
}