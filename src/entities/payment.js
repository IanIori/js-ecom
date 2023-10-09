import Order from "./order.js"

export default class Cart{

    constructor(id, orderId, moment) {
        this.id = id
        this.orderId = orderId
        this.moment = moment
    }

}