import {getPostProducts, getDeletePutProductById} from './products.js'
import { getPostCategories, getDeletePutCategoryById } from './categories.js'

export default {
  '/products': getPostProducts,
  '/products/{id}': getDeletePutProductById,
  
  '/categories': getPostCategories,
  '/categories/{id}': getDeletePutCategoryById,
}