const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/login", async (req, res) => {
  res.send(await controller.logar(req.body));
});

module.exports = router;
