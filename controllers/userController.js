const DB = require("../database/index");
const tabela = "users";

async function logar(data) {
  try {
    if (!data.email) {
      throw new Error("Email é o obrigatório");
    }
    if (!data.password) {
      throw new Error("Senha é obrigatória");
    }

    const result = await DB.execute(
      `SELECT token FROM ${tabela} WHERE user_email = '${data.email}' AND user_password = '${data.password}';`
    );
    if (result.length > 0) {
      return {
        type: "success",
        ...result[0],
      };
    } else {
      return {
        type: "warning",
        message: "Usuário ou senha estão incorretos",
      };
    }
  } catch (error) {
    return {
      type: "error",
      message: error.message,
    };
  }
}

async function checkToken(token) {
  const result = await DB.execute(
    `SELECT * FROM ${tabela} WHERE token = '${token}';`
  );
  return result;
}

module.exports = {
  logar,
  checkToken,
};
