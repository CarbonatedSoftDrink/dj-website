const express = require("express");
const router = express.Router();

const servicesControllers = require("../controllers/services-controllers");

router.get("/", servicesControllers.getAllServices);
// ^^  http://localhost:5000/api/services followed by nothing else ...

router.post('/create', servicesControllers.createService )
router.delete("/delete", servicesControllers.deleteService)
router.delete("/deleteAll", servicesControllers.deleteAllServices)
router.patch('/edit', servicesControllers.editService)

// Drops the entire services table
router.get('/drop', servicesControllers.dropServicesTable)

module.exports = router;