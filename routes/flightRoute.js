const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/', controller.getFlights)
.get("/:id", controller.getFlight)
.post("/", controller.bookflight)
.put("/:id", controller.updateFlights)
.delete("/:id", controller.bookflight);

module.exports = router;

