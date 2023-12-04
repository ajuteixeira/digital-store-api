const express = require("express"); //pega tudo que tem no pacote do express e coloca nessa variável
const cors = require("cors");
const brandRoutes = require('./routes/brandRoutes')

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Bem-vindo à API da Digital Store");
});

app.use('/marcas', brandRoutes) // recebe dois parametros: base da rota e o arquivo importado

app.listen(port, () => {
    console.log(`Servidor de pé na url: http://localhost:${port}`);
});
