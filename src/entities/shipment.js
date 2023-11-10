export default class Shipment{

    constructor(id, date, address, city, state, zip_code, orderId) {
        this.id = id
        this.date = date
        this.address = address
        this.city = city
        this.state = state
        this.zip_code = zip_code
        this.orderId = orderId
    }
}