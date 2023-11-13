export const getPostCategories = {
  get: {
    description: "Retorns a list of categories",
    tags: ["Categories"],
    responses: {
      200: {
        description: "Category list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/Category",
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
    description: "Creates a new category",
    tags: ["Categories"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/Category",
          },
        },
      },
    },
    responses: {
      201: {
        description: "The created Category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Category",
            },
          },
        },
      },
      400: {
        description: "Missing category attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}

export const getDeletePutCategoryById = {
  get: {
    description: "Returns a category by its Id",
    tags: ["Categories"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Category's Id",
        required: true,
        schema: {
          type: "integer"
        }
      }
    ],
    responses: {
      200: {
        description: "Category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Category",
            },
          },
        },
      },
      400: {
        description: "Missing category's Id",
      },
      404: {
        description: "Category not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  delete: {
    description: "Deletes a category by its Id",
    tags: ["Categories"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Category's Id",
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
            message: "Category deleted successfully"
          },
        },
      },
      400: {
        description: "Missing category's Id",
      },
      404: {
        description: "Category not found",
      },
      500: {
        description: "Internal error",
      },
    },
  },
  put: {
    description: "Updates a category by its Id",
    tags: ["Categories"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Category's Id",
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
            $ref: "#/schemas/Category",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The updated category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/Category",
            },
          },
        },
      },
      400: {
        description: "Missing category attribute"
      },
      500: {
        description: "Internal Error",
      },
    },
  }
}