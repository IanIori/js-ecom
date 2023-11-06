import Category from "../entities/category.js";
import Customer from "../entities/customer.js";
import OrderItem from "../entities/orderItem.js";
import Seller from "../entities/seller.js";
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
        new Customer(1, "Alice Smith", "123 Main St", "alice@example.com", "123-456-789-01"),
        new Customer(2, "Bob Johnson", "456 Elm St", "bob@example.com", "987-654-321-02"),
        new Customer(3, "Charlie Brown", "789 Oak St", "charlie@example.com", "456-789-123-03"),
        new Customer(4, "David Davis", "111 Pine St", "david@example.com", "789-123-456-04"),
        new Customer(5, "Eve White", "222 Cedar St", "eve@example.com", "654-321-987-05"),
        new Customer(6, "Frank Green", "333 Birch St", "frank@example.com", "321-654-789-06"),
        new Customer(7, "Grace Lee", "444 Redwood St", "grace@example.com", "987-789-654-07"),
        new Customer(8, "Henry Turner", "555 Sequoia St", "henry@example.com", "123-789-456-08"),
        new Customer(9, "Ivy Hall", "666 Maple St", "ivy@example.com", "456-123-789-09"),
        new Customer(10, "Jack King", "777 Walnut St", "jack@example.com", "789-456-123-10"),
    ],
    sellers: [
        new Seller(1, "Seller 1", "123 Main St", "seller1@example.com", "12345678901234"),
        new Seller(2, "Seller 2", "456 Elm St", "seller2@example.com", "23456789012345"),
        new Seller(3, "Seller 3", "789 Oak St", "seller3@example.com", "34567890123456"),
        new Seller(4, "Seller 4", "111 Pine St", "seller4@example.com", "45678901234567"),
        new Seller(5, "Seller 5", "222 Cedar St", "seller5@example.com", "56789012345678"),
        new Seller(6, "Seller 6", "333 Birch St", "seller6@example.com", "67890123456789"),
        new Seller(7, "Seller 7", "444 Redwood St", "seller7@example.com", "78901234567890"),
        new Seller(8, "Seller 8", "555 Sequoia St", "seller8@example.com", "89012345678901"),
        new Seller(9, "Seller 9", "666 Maple St", "seller9@example.com", "90123456789012"),
        new Seller(10, "Seller 10", "777 Walnut St", "seller10@example.com", "01234567890123"),
    ],
    products: [
        new Product(1, "Product 1", "Description for Product 1", 50, 1),
        new Product(2, "Product 2", "Description for Product 2", 60, 2),
        new Product(3, "Product 3", "Description for Product 3", 70, 3),
        new Product(4, "Product 4", "Description for Product 4", 80, 4),
        new Product(5, "Product 5", "Description for Product 5", 90, 5),
        new Product(6, "Product 6", "Description for Product 6", 45, 6),
        new Product(7, "Product 7", "Description for Product 7", 55, 7),
        new Product(8, "Product 8", "Description for Product 8", 65, 8),
        new Product(9, "Product 9", "Description for Product 9", 75, 9),
        new Product(10, "Product 10", "Description for Product 10", 85, 10),
    ],
    orderitems: [
        new OrderItem(1, 10, 3),
        new OrderItem(2, 9, 5),
        new OrderItem(3, 8, 1),
        new OrderItem(4, 7, 4),
        new OrderItem(5, 6, 2),
        new OrderItem(6, 5, 7),
        new OrderItem(7, 4, 1),
        new OrderItem(8, 3, 2),
        new OrderItem(9, 2, 3),
        new OrderItem(10, 1, 3)
    ],
    orders: [
        new Order(1, "Pending", 101, 201, new Date(), []),
        new Order(2, "Shipped", 102, 202, new Date(), []),
        new Order(3, "Delivered", 103, 203, new Date(), []),
        new Order(4, "Pending", 104, 204, new Date(), []),
        new Order(5, "Shipped", 105, 205, new Date(), []),
    ]
}

//Needs verification
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

export default db