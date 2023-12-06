const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lista de gêneros");
});
router.post("/", (req, res) => {
  res.send(`cria um gênero: ${JSON.stringify(req.body)}`);
});
router.post("/:id", (req, res) => {
  res.send(`edita o gênero de id ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.send(`deleta o gênero de id ${req.params.id}`);
});

module.exports = router; //exporta pra usar em outro arquivo
