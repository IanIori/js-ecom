import Category from "../entities/category.js";
import Customer from "../entities/customer.js";
import OrderItem from "../entities/orderItem.js";
import Payment from "../entities/payment.js";
import Order from "../entities/order.js";
import Product from "../entities/product.js";

const db = {
    categories: [
        new Category(1, "Electronics", "Devices and gadgets for electronic applications."),
        new Category(2, "Clothing", "Apparel and fashion accessories."),
        new Category(3, "Home and Garden", "Products for home improvement and gardening."),
        new Category(4, "Books", "Fiction, non-fiction, and educational books."),
        new Category(5, "Sports and Outdoors", "Equipment and gear for various sports and outdoor activities."),
        new Category(6, "Health and Beauty", "Cosmetics, skincare, and health-related products."),
        new Category(7, "Toys and Games", "Toys and games for all ages."),
        new Category(8, "Automotive", "Parts and accessories for automobiles."),
        new Category(9, "Food and Beverages", "A wide variety of food and drinks."),
        new Category(10, "Music and Instruments", "Musical instruments and audio products."),
    ],
    customers: [
        new Customer(1, "Alice Smith", "123 Main St", "alice@example.com", "123-456-789-01",true),
        new Customer(2, "Bob Johnson", "456 Elm St", "bob@example.com", "987-654-321-02",true),
        new Customer(3, "Charlie Brown", "789 Oak St", "charlie@example.com", "456-789-123-03",true),
        new Customer(4, "David Davis", "111 Pine St", "david@example.com", "789-123-456-04",true),
        new Customer(5, "Eve White", "222 Cedar St", "eve@example.com", "654-321-987-05",true),
        new Customer(6, "Frank Green", "333 Birch St", "frank@example.com", "321-654-789-06",false),
        new Customer(7, "Grace Lee", "444 Redwood St", "grace@example.com", "987-789-654-07",false),
        new Customer(8, "Henry Turner", "555 Sequoia St", "henry@example.com", "123-789-456-08",false),
        new Customer(9, "Ivy Hall", "666 Maple St", "ivy@example.com", "456-123-789-09",false),
        new Customer(10, "Jack King", "777 Walnut St", "jack@example.com", "789-456-123-10",false),
    ],
    products: [
        new Product(1, "Product 1", "Description for Product 1", 50, 1),
        new Product(2, "Product 2", "Description for Product 2", 60, 1),
        new Product(3, "Product 3", "Description for Product 3", 70, 2),
        new Product(4, "Product 4", "Description for Product 4", 80, 2),
        new Product(5, "Product 5", "Description for Product 5", 90, 3),
        new Product(6, "Product 6", "Description for Product 6", 45, 3),
        new Product(7, "Product 7", "Description for Product 7", 55, 4),
        new Product(8, "Product 8", "Description for Product 8", 65, 4),
        new Product(9, "Product 9", "Description for Product 9", 75, 5),
        new Product(10, "Product 10", "Description for Product 10", 85, 5),
    ],
    orderitems: [
        new OrderItem(1, 10, 3, 5),
        new OrderItem(2, 9, 5, 5),
        new OrderItem(3, 8, 1, 4),
        new OrderItem(4, 7, 4, 4),
        new OrderItem(5, 6, 2, 3),
        new OrderItem(6, 5, 7, 3),
        new OrderItem(7, 4, 1, 2),
        new OrderItem(8, 3, 2, 2),
        new OrderItem(9, 2, 3, 1),
        new OrderItem(10, 1, 3, 1)
    ],
    orders: [
        new Order(1, "Pending", 5, new Date("2023-10-13T08:30:37Z"), []),
        new Order(2, "Shipped", 6, new Date("2023-10-20T09:00:29Z"), []),
        new Order(3, "Delivered", 7, new Date("2023-10-27T09:33:07Z"), []),
        new Order(4, "Pending", 8, new Date("2023-11-03T10:03:59Z"), []),
        new Order(5, "Shipped", 9, new Date("2023-11-10T11:02:15Z"), []),
    ],
    payments: [
        new Payment(2, 2, new Date("2023-10-21T23:59:29Z")),
        new Payment(3, 3, new Date("2023-10-30T19:33:07Z")),
        new Payment(5, 5, new Date("2023-11-13T20:39:15Z")),
    ],
}

db.orders[0].addItem(db.orderitems[0])
db.orders[0].addItem(db.orderitems[1])
db.orders[1].addItem(db.orderitems[2])
db.orders[1].addItem(db.orderitems[3])
db.orders[2].addItem(db.orderitems[4])
db.orders[2].addItem(db.orderitems[5])
db.orders[3].addItem(db.orderitems[6])
db.orders[3].addItem(db.orderitems[7])
db.orders[4].addItem(db.orderitems[8])
db.orders[4].addItem(db.orderitems[9])

db.customers[0].addProduct(db.products[0])
db.customers[0].addProduct(db.products[1])
db.customers[1].addProduct(db.products[2])
db.customers[1].addProduct(db.products[3])
db.customers[2].addProduct(db.products[4])
db.customers[2].addProduct(db.products[5])
db.customers[3].addProduct(db.products[6])
db.customers[3].addProduct(db.products[7])
db.customers[4].addProduct(db.products[8])
db.customers[4].addProduct(db.products[9])

export default db