import express from "express";
import { getNotes } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getNotes);

export default router;
