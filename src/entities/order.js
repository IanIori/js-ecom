import OrderItem from "./orderItem.js"

export default class Order{

    constructor(id, status, customerId, moment, items = []) {
        this.id = id
        this.staus = status
        this.customerId = customerId
        this.moment = moment
        this.items = items
    }

    addItem(OrderItem) {
       this.items.push(OrderItem) 
    }

    getDateAsString() {
        return this.moment.toString()
    }
}