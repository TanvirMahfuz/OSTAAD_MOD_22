// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config/config.js";
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({message: "No token provided"});

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.student = decoded;
    next();
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
};

export default authMiddleware;
