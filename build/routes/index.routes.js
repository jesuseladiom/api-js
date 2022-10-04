"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _personsController = require("../controller/persons.controller.js");

//initialize the router
var router = (0, _express.Router)(); //define routes

router.get("/", _personsController.methods.getPersons);
router.get("/:id", _personsController.methods.getPerson);
router.post("/", _personsController.methods.addPerson);
router.put("/:id", _personsController.methods.updatePerson);
router["delete"]("/:id", _personsController.methods.deletePerson);
var _default = router;
exports["default"] = _default;