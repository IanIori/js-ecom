export default class BaseModel{
    constructor(db, entity) {
        this.db = db[entity]
    }

    //Database entries here 

    findAll() {
        return this.db
    }

    findById(id) {
        return this.db.find((item) => item.id == id)
    }

    create(item) {
        this.db.push(item)
    }

    delete(id) {
        const index = this.db.findIndex(item => item.id == id)
        if(index === -1) throw error("Item not found")
        this.db.splice(index,1)
        return true
    }

    update(id, item) {
        const index = this.db.findIndex(item => item.id == id)
        if(index === -1) throw error("Item not found")
        this.db[index] = item
        return true
    }
}