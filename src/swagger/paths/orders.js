export const getPostOrders = {
  get: {
    description: "Retorns a list of orders",
    tags: ["Orders"],
    responses: {
      200: {
        description: "Order list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/Order",
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
    description: "Creates a new order",
    tags: ["Orders"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Order",
          },
        },
      },
    },
    responses: {
      201: {
        description: "The created order",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Order",
            },
          },
        },
      },
      400: {
        description: "Missing order attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}

export const getDeletePutOrderById = {
  get: {
    description: "Returns an order by its Id",
    tags: ["Orders"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      200: {
        description: "Order",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Order",
            },
          },
        },
      },
      400: {
        description: "Missing order's Id",
      },
      404: {
        description: "Order not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  delete: {
    description: "Deletes an order by its Id",
    tags: ["Orders"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order's Id",
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
            message: "Order deleted successfully"
          },
        },
      },
      400: {
        description: "Missing order's Id",
      },
      404: {
        description: "Order not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  put: {
    description: "Updates an order by its Id",
    tags: ["Orders"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Order's Id",
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
            $ref: "#/schemas/Order",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The updated order",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Order",
            },
          },
        },
      },
      400: {
        description: "Missing order attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}