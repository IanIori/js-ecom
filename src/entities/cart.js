//Maybe?
import Product from "./product.js"

export default class Cart{

    constructor(id, customerId, items = []) {
        this.id = id
        this.customerId = customerId
    }

    addItem(OrderItem) {
        this.items.push(OrderItem) 
    }

}