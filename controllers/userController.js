const DB = require("../database/index");
const jwt = require("jsonwebtoken");
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
      `SELECT user_id, token FROM ${tabela} WHERE user_email = '${data.email}' AND user_password = '${data.password}';`
    );
    if (result.length > 0) {
      const token = jwt.sign({ user_id: result[0].user_id }, 'digital-store-api', {
        expiresIn: '1h',
      });

      await DB.execute(`UPDATE users SET token = '${token}' WHERE user_id = '${result[0].user_id}';`)

      return {
        type: "success",
        token
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
