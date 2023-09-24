import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import memberData from "../data/members.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(memberData);
});

router.get("/:memberId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/member.html"));
});

export default router;
