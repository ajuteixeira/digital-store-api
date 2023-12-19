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

async function editar(id, data) {
  try {
    if (!data.brand_name) {
      throw new Error("brand_name é um parametro obrigatório!");
    }
    if (data.brand_status) {
      await DB.execute(
        `UPDATE ${tabela} SET brand_name = '${data.brand_name}', brand_status = ${data.brand_status} WHERE brand_id = ${id};`
      );
    } else {
      await DB.execute(
        `UPDATE ${tabela} SET brand_name = '${data.brand_name}' WHERE brand_id = ${id};`
      );
    }
    return listaUM(id);
  } catch (error) {
    return {
      type: "error",
      message: `${error}`,
    };
  }
}

async function deletar(id) {
  await DB.execute(`DELETE FROM ${tabela} WHERE brand_id = ${id}`);
  return {
    type: "success",
    message: "Dados apagados com sucesso!",
  };
}

module.exports = {
  listar,
  listaUM,
  criar,
  editar,
  deletar,
};
