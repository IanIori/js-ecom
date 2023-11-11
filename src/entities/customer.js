export default class Customer{

    constructor(id, name, address, email, cpf, isSeller) {
        this.id = id
        this.name = name
        this.address = address
        this.email = email
        this.cpf = cpf
        this.isSeller = isSeller
        this.products = []
    }

    addProduct(product) {
        if(this.isSeller == false) {
            console.log("Transaction not authorized")
        } else {
            this.products.push(product)
        }
    }
}