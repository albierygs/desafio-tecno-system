const { Database } = require("sqlite3");
const nodemailer = require("nodemailer");

const db = new Database(":memory:");

const initializeDB = () => {
  db.serialize(() => {
    db.run(
      "CREATE TABLE reserve (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL, email TEXT NOT NULL);"
    );
  });
};

const insertInDB = (name, email, phone) => {
  db.run(
    "INSERT INTO reserve (name, email, phone) VALUES (?, ?, ?);",
    [name, email, phone],
    (error) => {
      if (error) {
        return false;
      }
      return true;
    }
  );
  return true;
};

const sendEmail = async (email, name) => {
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ACCOUNT,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ACCOUNT,
    to: email,
    subject: "Reserva confirmada!",
    html: `Olá ${name}, sua reserva no nosso restaurante foi confirmada.\nAguardamos você para uma ótima experiência gastronômica.\nCaso precise alterar ou cancelar a reserva, entre em contato conosco.\n\nAté breve!`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`E-mail enviado para ${email}: ` + info.response);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};

module.exports = {
  db,
  initializeDB,
  insertInDB,
  sendEmail,
};
