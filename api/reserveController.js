const { Router } = require("express");
const { verifyEmailAlreadyExists } = require("./reserveMiddleware");
const { insertInDB, sendEmail } = require("./utils");

const reserveRouter = Router();

reserveRouter.post(
  "/reserve",
  verifyEmailAlreadyExists,
  async (request, response) => {
    const { name, email, phone } = request.body;

    if (!insertInDB(name, email, phone)) {
      response.status(500).send({ error: "error in db" });
    }

    const emailSended = await sendEmail(email, name);

    if (emailSended) {
      response.status(200).send("ok");
      return;
    }
    response.status(500).send({ error: "error send email" });
  }
);

module.exports = reserveRouter;
