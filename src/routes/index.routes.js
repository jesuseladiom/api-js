import { Router } from "express";

import { methods as personController } from "../controller/persons.controller.js";

//initialize the router
const router= Router();

//define routes
router.get("/", personController.getPersons);
router.get("/:id", personController.getPerson);
router.post("/", personController.addPerson);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

export default router;
