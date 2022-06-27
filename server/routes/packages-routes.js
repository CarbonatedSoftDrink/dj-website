const express = require("express");
const router = express.Router();

const packagesControllers = require("../controllers/packages-controllers");

router.get("/", packagesControllers.getAllPackages);
// ^^  http://localhost:5000/api/packages followed by nothing else ...

module.exports = router;