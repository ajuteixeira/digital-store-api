const DB = require("../database/index");
const tabela = "categories";

async function listar(coluna = "category_id", ordem = "ASC") {
  return await DB.execute(
    `SELECT * FROM ${tabela} ORDER BY ${coluna} ${ordem};`
  );
}

async function listarUM(id) {
  return await DB.execute(`SELECT * FROM ${tabela} WHERE category_id = ${id}`);
}

module.exports = {
  listar,
  listarUM,
};
