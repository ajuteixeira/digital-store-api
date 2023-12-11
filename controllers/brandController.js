const DB = require("../database/index");
const tabela = "brands";

async function listar() {
  return await DB.execute(`SELECT * FROM ${tabela};`);
}

async function listaUM(id) {
  return await DB.execute(`SELECT * FROM ${tabela} WHERE brand_id = ${id};`);
}

async function criar(data) {
  try {
    const linha = await DB.execute(
      `INSERT INTO ${tabela} (brand_name) VALUES ('${data.brand_name}');`
    );

    return listaUM(linha.insertId);
  } catch (error) {
    return {
      type: "error",
      message: `Erro ao inserir dados: ${error.message}`,
    };
  }
}

function editar() {
  return "lista de dados";
}

function deletar() {
  return "lista de dados";
}

module.exports = {
  listar,
  listaUM,
  criar,
  editar,
  deletar,
};
