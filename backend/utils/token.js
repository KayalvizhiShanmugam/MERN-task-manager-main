const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const createAccessToken = (payload) => {
  try {
    if (!ACCESS_TOKEN_SECRET) {
      throw new Error("ACCESS_TOKEN_SECRET is not defined in the environment");
    }

    return jwt.sign(payload, ACCESS_TOKEN_SECRET);
  } catch (error) {
    console.error("Error creating access token:", error.message);
    throw error; // Rethrow the error for further handling if needed
  }
};

module.exports = {
  createAccessToken,
};
