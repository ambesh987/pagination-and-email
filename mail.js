const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b2ea34d65cd365",
    pass: "1fb78cb9f7cf33",
  },
});

module.exports = transport;