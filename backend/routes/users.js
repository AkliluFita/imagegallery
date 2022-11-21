import express from "express";
import { getUser, getUsers, updateUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUsers);

export default router;
