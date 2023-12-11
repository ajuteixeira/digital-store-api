const express = require("express");
const router = express.Router();
const controller = require("../controllers/brandController");

router.get("/", async (req, res) => {
  res.send(await controller.listar());
});

router.get("/:id", async (req, res) => {
  res.send(await controller.listaUM(req.params.id));
});

router.post("/", async (req, res) => {
  res.send(await controller.criar(req.body));
});

router.post("/:id", (req, res) => {
  res.send(`edita a marca de id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`deleta a marca de id ${req.params.id}`);
});

module.exports = router; //exporta pra usar em outro arquivo
