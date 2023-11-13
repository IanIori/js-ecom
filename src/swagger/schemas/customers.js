export const Customer = {
  type: "object",
  required: ["id", "name", "address", "email", "identifier", "isSeller"],
  properties: {
    id: {
      type: "number",
      description: "Customer's Id number",
    },
    name: {
      type: "string",
      description: "Customer's name",
    },
    address: {
      type: "string",
      description: "Customer's address",
    },
    email: {
      type: "string",
      description: "Customer's email",
    },
    identifier: {
      type: "String",
      description: "Customer's identifier, can be either a CPF or a CNPJ",
    },
    isSeller: {
      type: "boolean",
      description: "Indicates if a customer is also a seller or not"
    },
    products: {
      type: "array",
      description: "Sold products if the customer is also a seller"
    }
  },
  example: {
    id: 1,
    name: "Alice Smith",
    address: "123 Main St",
    email: "alice@example.com",
    identifier: "123-456-789-01",
    isSeller: true,
    products: null
  },
}