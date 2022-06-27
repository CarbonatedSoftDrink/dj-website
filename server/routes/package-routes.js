const express = require("express");
const router = express.Router();

const packageControllers = require("../controllers/package-controllers");

router.get("/", packageControllers.getAllPackages);
// ^^  http://localhost:5000/api/packages followed by nothing else ...

module.exports = router;