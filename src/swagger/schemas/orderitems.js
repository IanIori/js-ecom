export const OrderItem = {
  type: "object",
  required: ["id", "productId", "quantity", "customerId"],
  properties: {
    id: {
      type: "number",
      description: "OrderItem item's Id number",
    },
    productId: {
      type: "number",
      description: "OrderItem item's product Id",
    },
    quantity: {
      type: "number",
      description: "OrderItem item's quantity",
    },
    customerId: {
      type: "number",
      description: "OrderItem item's seller, has to be a customer with true isSeller attribute",
    },
  },
  example: {
    id: 1,
    productId: 10,
    quantity: 3,
    customerId: 5,
  },
}