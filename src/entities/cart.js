//Maybe?
export default class Cart{

    constructor(id, customerId) {
        this.id = id
        this.customerId = customerId
        this.items = []
    }

    addItem(product) {
        this.items.push([product, 1]) 
    }

    increaseQuantity(product) {
        this.items[this.items.findIndex(product), +1] 
    }

    removeItem(product) {
        this.items.pop(this.items.findIndex(product))
    }

}