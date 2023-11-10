import BaseModel from "./BaseModel.js";

export default class WishlistModel extends BaseModel {
    constructor(db) {
        super(db,'wishlists')
    }
}