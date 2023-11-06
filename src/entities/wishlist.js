//Maybe?
export default class Wishlist{

    constructor(id, customerId) {
        this.id = id
        this.customerId = customerId
        this.products = []
    }

    addItem(product) {
        this.items.push([product, 1]) 
    }

    removeItem(product) {
        this.items.pop(this.items.findIndex(product))
    }
}