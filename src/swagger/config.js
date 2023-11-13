import paths from './paths/index.js'
import * as schemas from './schemas/index.js'

const swaggerDocument = {
  openapi: "3.1.0",
  info: {
    title: "E-Commerce API FATEC",
    version: "0.1.0",
    description:
      "An E-Commerce API developed using Node.js and documented using Swagger",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths,
  schemas: {
    ...schemas
  }
}

export default swaggerDocument