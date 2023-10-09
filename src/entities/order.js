import OrderItem from "./orderItem.js"

export default class Order{

    constructor(id, status, customerId, sellerId, moment, items = []) {
        this.id = id
        this.staus = status
        this.customerId = customerId
        this.sellerId = sellerId
        this.moment = moment
    }

    addItem(OrderItem) {
       this.items.push(OrderItem) 
    }
}