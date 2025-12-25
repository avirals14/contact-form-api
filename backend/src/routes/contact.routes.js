import express from "express";
import { getAllContacts, submitForm } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", submitForm);
router.get("/", getAllContacts);

export default router;