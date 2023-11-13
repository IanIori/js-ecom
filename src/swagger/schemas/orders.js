export const Order = {
  type: "object",
  required: ["id", "status", "customerId", "moment", "items"],
  properties: {
    id: {
      type: "number",
      description: "Order's Id number",
    },
    status: {
      type: "string",
      description: "Order's status",
    },
    customerId: {
      type: "number",
      description: "Order's customer Id",
    },
    moment: {
      type: "date",
      description: "The moment the order was put",
    },
    items: {
      type: "array",
      description: "Order's items "
    }
  },
  example: {
    id: 1,
    status: "Pending",
    customerId: 1,
    moment: "Mon Oct 13 2023 20:26:33 GMT-3",
    items: null
  },
}