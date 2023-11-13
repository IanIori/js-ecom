export const getPostOrderItems = {
  get: {
    description: "Retorns a list of order items",
    tags: ["Order Items"],
    responses: {
      200: {
        description: "Order items list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/OrderItem",
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
    description: "Creates a new order item",
    tags: ["Order Items"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/OrderItem",
          },
        },
      },
    },
    responses: {
      201: {
        description: "The created order item",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/OrderItem",
            },
          },
        },
      },
      400: {
        description: "Missing order item attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}

export const getDeletePutOrderItemById = {
  get: {
    description: "Returns an order item by its Id",
    tags: ["Order Items"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order item's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      200: {
        description: "Order item",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/OrderItem",
            },
          },
        },
      },
      400: {
        description: "Missing order item's Id",
      },
      404: {
        description: "Order item not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  delete: {
    description: "Deletes an order item by its Id",
    tags: ["Order Items"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order item's Id",
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
            message: "Order item deleted successfully"
          },
        },
      },
      400: {
        description: "Missing order item's Id",
      },
      404: {
        description: "Order item not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  put: {
    description: "Updates an order item by its Id",
    tags: ["Order Items"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order item's Id",
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
            $ref: "#/schemas/OrderItem",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The updated order item",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/OrderItem",
            },
          },
        },
      },
      400: {
        description: "Missing order item attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}