export const getPostCustomers = {
  get: {
    description: "Retorns a list of customers",
    tags: ["Customers"],
    responses: {
      200: {
        description: "Customer list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/Customer",
              },
            },
          },
        },
      },
      500: {
        description: "Internal Error",
      },
    },
  },
  post: {
    description: "Creates a new customer",
    tags: ["Customers"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Customer",
          },
        },
      },
    },
    responses: {
      201: {
        description: "The created customer",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Customer",
            },
          },
        },
      },
      400: {
        description: "Missing customer attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}

export const getDeletePutCustomerById = {
  get: {
    description: "Returns a customer by its Id",
    tags: ["Customers"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Customer's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      200: {
        description: "Customer",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Customer",
            },
          },
        },
      },
      400: {
        description: "Missing customer's Id",
      },
      404: {
        description: "Customer not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  delete: {
    description: "Deletes a customer by its Id",
    tags: ["Customers"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Customer's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      204: {
        description: "Success message",
        content: {
          "application/json": {
            message: "Customer deleted successfully"
          },
        },
      },
      400: {
        description: "Missing customer's Id",
      },
      404: {
        description: "Customer not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  put: {
    description: "Updates a customer by its Id",
    tags: ["Customers"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Customer's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],    
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Customer",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The updated customer",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Customer",
            },
          },
        },
      },
      400: {
        description: "Missing customer attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}