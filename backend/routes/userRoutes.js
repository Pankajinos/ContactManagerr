const express = require("express");
const router = express.Router();
const validateToken=require("../middleware/validateTokenHandler")
const { register,login,current } = require("../controllers/userController");

router.route("/register").post(register);
router.route("/login").post(login);
router.get("/current",validateToken,current);

module.exports = router