//Maybe?
class OrderStatus {
    
    static InPreparation = new OrderStatus("IN PREPARATION")
    static Shipped = new OrderStatus("SHIPPED")
    static Delivered = new OrderStatus("DELIVERED")
  
    constructor(name) {
      this.name = name
    }
  }
  