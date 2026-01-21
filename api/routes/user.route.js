import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", test);
router.get("/api/user", test);

export default router;
