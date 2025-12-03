import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Website Traffic Monitoring API",
      version: "1.0.0",
      description: "API documentation for tracking website traffic"
    }
  },
  apis: ["./src/routes/*.ts"] // swagger reads annotations from route files
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
