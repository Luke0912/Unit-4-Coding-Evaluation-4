require("dotenv").config();

const { reject } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");


const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token.process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
    console.log(decoded);
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authoriazation)
    return res.status(400).send({ message: "auth token not found or invalid" });

  if (!req.headers.authoriazation.startsWith("Bearer"))
    return res.status(400).send({ message: "auth token not found or invalid" });

  const token = req.headers.authoriazation.trim().split("")[1];
  let decoded;
  try {
    decoded = await verifyToken(token);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "auth tooken not found or invalis" });
  }
  req.user = decoded.user;

  return next();
};

module.exports=authenticate
