const { db } = require("./utils");

const verifyEmailAlreadyExists = (request, response, next) => {
  const { email } = request.body;

  db.get("SELECT * FROM reserve WHERE email = ?", [email], (error, row) => {
    if (row) {
      response.status(409).send({ error: "email already exists in database" });
      return;
    }
    next();
  });
};

module.exports = {
  verifyEmailAlreadyExists,
};
