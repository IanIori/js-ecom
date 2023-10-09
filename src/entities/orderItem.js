import Product from "./product.js"

export default class OrderItem{

    constructor(id, productId, quantity) {
        this.id = id
        this.productId = productId
        this.quantity = quantity
    }

    subtotal() {
        return this.quantity * this.productId.price //need to find the correct way
    }
}