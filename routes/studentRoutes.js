// routes/studentRoutes.js
import express from "express";
import {
  registerStudent,
  loginStudent,
  getProfile,
  updateProfile,
} from "../app/controllers/studentController.js";
import {
  uploadFile,
  getFile,
  deleteFile,
  upload,
} from "../app/controllers/fileController.js";
import authMiddleware from "../app/middlewares/authMiddleware.js";

const router = express.Router();

// Student Routes
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

// File Upload Routes
router.post("/upload", authMiddleware, upload.single("file"), uploadFile);
router.get("/file/:fileName", authMiddleware, getFile);
router.delete("/file/:fileName", authMiddleware, deleteFile);

export default router;
