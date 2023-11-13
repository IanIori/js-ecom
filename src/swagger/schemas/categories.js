export const Category = {
  type: "object",
  required: ["id", "name", "description"],
  properties: {
    id: {
      type: "number",
      description: "Category's Id number",
    },
    name: {
      type: "string",
      description: "Category's name",
    },
    description: {
      type: "string",
      description: "Category's description",
    },
  },
  example: {
    id: 1,
    name: "Electronics",
    description: "Devices and gadgets for electronic applications.",
  },
}