const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env.JWT_SECRET;

function verify(req, res, next) {
  const verifyHeader = req.headers.authorization;
  if (!verifyHeader || !verifyHeader.startsWith("Bearer ")) {
    return res.status(403).json({ msg: "missing auth header" });
  }
  const token = verifyHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    //set email to req.email
    next();
  } catch (err) {
    return res.status(403).json({ msg: "invalid token" });
  }
}

module.exports = { verify };
