const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lista de categorias");
});
router.post("/", (req, res) => {
  res.send(`cria uma categoria: ${JSON.stringify(req.body)}`);
});
router.post("/:id", (req, res) => {
  res.send(`edita a categoria de id ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.send(`deleta a categoria de id ${req.params.id}`);
});

module.exports = router; //exporta pra usar em outro arquivo
