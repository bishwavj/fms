const express = require("express");
const router = express.Router();
const verifyToken = require("../controllers/verifyToken");
const userController = require("../controllers/userController");
const fileController = require("../controllers/fileController");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post(
  "/upload",
  verifyToken,
  upload.single("file"),
  fileController.uploadFile
);
router.get("/allFiles", fileController.allFiles);
router.post("/deleteFile", fileController.deleteFile);

module.exports = router;
