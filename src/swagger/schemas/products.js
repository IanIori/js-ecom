export const Product = {
  type: "object",
  required: ["id", "name", "description", "price", "categoryId"],
  properties: {
    id: {
      type: "number",
      description: "Product's Id number",
    },
    name: {
      type: "string",
      description: "Product's name",
    },
    description: {
      type: "string",
      description: "Products's description",
    },
    price: {
      type: "number",
      description: "Product's price",
    },
    categoryId: {
      type: "number",
      description: "Reference to the product's category by Id",
    },
  },
  example: {
    id: 1,
    name: "Iphone 15",
    description: "Apple's newest phone",
    price: 1500,
    categoryId: 1
  },
}