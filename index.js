const express = require("express"); //pega tudo que tem no pacote do express e coloca nessa variável
const cors = require("cors");
// const swaggerUI = require("swagger-ui-express");
// const swaggerJSDoc = require("swagger-jsdoc");

// let swaggerDefinition = {
//   info: {
//     title: "Digital Store API",
//     version: "1.0.0",
//     description: "Documentação da API",
//   },
//   components: {
//     schemas: require("./schemas.json"),
//   },
// };

// let options = {
//   swaggerDefinition,
//   apis: ["./routes/*.js"],
// };

// let swaggerSpec = swaggerJSDoc(options);

const brandRoutes = require("./routes/brandRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const gendersRoutes = require("./routes/gendersRoutes");

const app = express();
const port = 8000;

app.use(express.json()); //middleware que converte o corpo da requisição pra json
app.use(cors()); // middleware pra api aceitar requisições que venham de outros domínios
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Digital Store");
});

/**
 * @swagger
 * /marcas:
 * get:
 *  tags:
 *    - Marcas
 *  description:
 *    - Traz a lista d emarcas
 *  produces:
 *    - application/json
 *  parameters:
 *    - name: brand
 *        description: Objeto marca
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#components/schemas/Brand'
 *  response:
 *      200:
 *        description: Retorna uma lista de marcas
 *        schema:
 *            $ref: '#components/schemas/Brand'
 */

app.use("/marcas", brandRoutes); // recebe dois parametros: base da rota e o arquivo importado
app.use("/categorias", categoriesRoutes);
app.use("/generos", gendersRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Rota não encontrada");
});

app.listen(port, () => {
  console.log(`Servidor de pé na url: http://localhost:${port}`);
});
