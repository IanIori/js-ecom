import Product from "./product.js"

export default class Order{

    constructor(id, buyer, seller, date, products) {
        this.id = id
        this.buyer = buyer
        this.seller = seller
        this.date = date
        products.forEach(() => {
            new Product()
        })
    }
}