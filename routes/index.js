const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/index");
const authController = require("../controllers/authController");

router.get("/", mainController.homepage);
router.get("/life", mainController.postLife);
router.get("/tech-stack", mainController.postTechStack);
router.get("/dashboard", mainController.dashboard);
router.get("/add-log", mainController.addLog);

// Auth Controller
router.get("/login", authController.login);
router.post("/login", authController.login_auth);

router.get("/register", authController.register);
router.post("/register", authController.register_auth);

module.exports = router;
