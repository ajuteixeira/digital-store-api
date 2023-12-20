const express = require("express"); //pega tudo que tem no pacote do express e coloca nessa variável
const cors = require("cors");

const brandRoutes = require("./routes/brandRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const gendersRoutes = require("./routes/gendersRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 8000;

app.use(express.json()); //middleware que converte o corpo da requisição pra json
app.use(cors()); // middleware pra api aceitar requisições que venham de outros domínios
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Bem-vindo à API da Digital Store");
});

app.use("/user", userRoutes);

const hasToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Token é necessário!");
  }
  next();
};
app.use(hasToken);

app.use("/marcas", brandRoutes); // recebe dois parametros: base da rota e o arquivo importado
app.use("/categorias", categoriesRoutes);
app.use("/generos", gendersRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Rota não encontrada");
});

app.listen(port, () => {
  console.log(`Servidor de pé na url: http://localhost:${port}`);
});
