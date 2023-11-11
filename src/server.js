import express from "express";
import db from "./database/config.js";
import CartRoutes from './routes/CartRoutes.js'
import CategoryRoutes from "./routes/CategoryRoutes.js";
import CustomerRoutes from "./routes/CustomerRoutes.js";
import OrderItemRoutes from './routes/OrderItemRoutes.js'
import OrderRoutes from './routes/OrderRoutes.js'
import PaymentRoutes from './routes/PaymentRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
import ShipmentRoutes from './routes/ShipmentRoutes.js'
import WishlistRoutes from './routes/WishlistRoutes.js'

const app = express()
app.use(express.json())

app.get('/healthcheck', (req,res) => {
    res.status(200).send("Ok!")
})

const cartRoutes = new CartRoutes(db)
app.use('/carts', cartRoutes.routes())

const categoryRoutes = new CategoryRoutes(db)
app.use('/categories', categoryRoutes.routes())

const customerRoutes = new CustomerRoutes(db)
app.use('/customers', customerRoutes.routes())

const orderItemRoutes = new OrderItemRoutes(db)
app.use('/orderitems', orderItemRoutes.routes())

const orderRoutes = new OrderRoutes(db)
app.use('/orders', orderRoutes.routes())

const paymentRoutes = new PaymentRoutes(db)
app.use('/payments', paymentRoutes.routes())

const productRoutes = new ProductRoutes(db)
app.use('/products', productRoutes.routes())

const shipmentRoutes = new ShipmentRoutes(db)
app.use('/shipments', shipmentRoutes.routes())

const wishlistRoutes = new WishlistRoutes(db)
app.use('/wishlists', wishlistRoutes.routes())

app.listen(3000, () => {
    console.log("Server working on port 3000")
})