const express = require('express');
const router = express.Router();

router.get('/marcas', (req, res) => {
    res.send('lista de marcas');
});

router.post('/marcas', (req, res) => {
    res.send(`cria uma marca: ${JSON.stringify.req.body}`);
});

router.post('/marcas/:id', (req, res) => {
    res.send(`edita a marca de id ${req.params.id}`);
});

router.delete('/marcas/:id', (req, res) => {
    res.send(`deleta a marca de id ${req.params.id}`);
});

module.exports = router; //exporta pra usar em outro arquivo