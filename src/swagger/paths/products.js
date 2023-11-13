export const getPostProducts = {
  get: {
    description: "Retorns a list of products",
    tags: ["Products"],
    responses: {
      200: {
        description: "Product list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/Product",
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
    description: "Creates a new product",
    tags: ["Products"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Product",
          },
        },
      },
    },
    responses: {
      201: {
        description: "The created product",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Product",
            },
          },
        },
      },
      400: {
        description: "Missing product attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}

export const getDeletePutProductById = {
  get: {
    description: "Returns a product by its Id",
    tags: ["Products"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Product's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      200: {
        description: "Product",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Product",
            },
          },
        },
      },
      400: {
        description: "Missing product's Id",
      },
      404: {
        description: "Product not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  delete: {
    description: "Deletes a Product by its Id",
    tags: ["Products"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Product's Id",
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
            message: "Product deleted successfully"
          },
        },
      },
      400: {
        description: "Missing product's Id",
      },
      404: {
        description: "Product not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  put: {
    description: "Updates a product by its Id",
    tags: ["Products"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Product's Id",
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
            $ref: "#/schemas/Product",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The updated product",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Product",
            },
          },
        },
      },
      400: {
        description: "Missing product attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}