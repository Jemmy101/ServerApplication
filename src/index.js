require('dotenv/config');
const express = require('express');
const cors = require('cors')
const {sequelize} = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();

app.use(cors());

app.use(express.json());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


const swaggerDocs = swaggerJsDoc({
    swagger: "2.0",
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: "Braided API",
            version: '1.0',
            description: 'Api documentation for the Braided'
        },
        components: {
            securitySchemes: {
                jwt: {
                    type: 'http',
                    scheme: 'bearer',
                    in: 'header',
                    bearerFormat: 'JWT',
                }
            }
        },
        tags: [],
        security: [{
            jwt: []
        }],
        schemes: [
            'http'
        ],
        servers: [
            {
                "url": `http://localhost:8080/`
            }
        ]
    },
    apis: ["src/routes/*.js", "src/models/*.js"],
});
// swagger options
const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none } ',
    customSiteTitle: 'Braided API Documentation'
}

//Swagger API doc endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerOptions));
app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
});

//router
app.use('/', require('./routes'))

app.listen(8080, async () => {
  console.log('API is running on http://localhost:8080');
  await sequelize.authenticate();
  console.log("database connected!!")
});