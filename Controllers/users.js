const { CommandFailedEvent } = require("mongodb");
const transporter = require("../mail");
const User = require("../Models/users");

const emailBody = async (body) => {
  return await transporter.sendMail({
    from: '"Masai" <foo@example.com>', // sender address
    to: `${body.email}, admin1@abc.com, admin2@abc.com, admin3@abc.com, admin4@abc.com, admin5@abc.com`, // list of receivers
    subject: `Welcome to ABC system ${body.firstname} ${body.lastname}`, // Subject line
    text: `Hi ${body.firstname}, Please confirm your email address`, // plain text body
    html: `<b>Hi ${body.firstname}, Please confirm your email address</b>`,
  });
};

module.exports.Register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const userData = await User.create(req.body);
    const emailData = await emailBody(req.body);

    res.json({
      status: "registeration",
      data: userData,
      emailData,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

module.exports.AllUser = async (req, res, next) => {
  console.log(req.query);
  const limit = req.query.limit;
  const page = req.query.page;
  const skip = (page - 1) * limit;

  const userData = await User.find({}).skip(skip).limit(limit);
  res.json({
    status: "all user",
    list: userData.length,
    userData,
  });
};