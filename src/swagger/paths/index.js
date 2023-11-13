import { getPostProducts, getDeletePutProductById } from './products.js'
import { getPostCategories, getDeletePutCategoryById } from './categories.js'
import { getPostCustomers, getDeletePutCustomerById } from './customers.js'
import { getPostOrders, getDeletePutOrderById } from './orders.js'
import { getPostOrderItems, getDeletePutOrderItemById } from './orderitems.js'


export default {
  '/products': getPostProducts,
  '/products/{id}': getDeletePutProductById,
  
  '/categories': getPostCategories,
  '/categories/{id}': getDeletePutCategoryById,

  '/customers': getPostCustomers,
  '/customers/{id}': getDeletePutCustomerById,

  '/orders': getPostOrders,
  '/orders/{id}': getDeletePutOrderById,

  '/orderitems': getPostOrderItems,
  '/orderitems/{id}': getDeletePutOrderItemById,
}