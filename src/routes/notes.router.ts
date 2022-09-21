import express from "express";
import * as NoteController from "../controllers/notes.controller";

export const notesRouter = express.Router();

notesRouter.post("/", NoteController.createNote);

notesRouter.delete("/:id", NoteController.deleteNote);

notesRouter.patch("/:id", NoteController.updateNote);

notesRouter.get("/stats", NoteController.getStats);

notesRouter.get("/:id", NoteController.findOneNote);

notesRouter.get("/", NoteController.findAllNotes);

