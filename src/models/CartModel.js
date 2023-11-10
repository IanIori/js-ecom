import BaseModel from "./BaseModel.js";

export default class CartModel extends BaseModel {
    constructor(db) {
        super(db,'carts')
    }
}