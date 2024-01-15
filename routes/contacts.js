const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll); //GET all

router.get("/:id", contactsController.getSingle); // GET one

router.post("/", contactsController.createContact);

router.put("/:id", contactsController.updateContact);

router.delete("/:id", contactsController.deleteContact);

module.exports = router;