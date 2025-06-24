import express from "express";
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNoteBYId,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteBYId);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
