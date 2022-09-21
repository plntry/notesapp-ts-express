import express from "express";
import * as NoteController from "../controllers/notes.controller";

export const notesRouter = express.Router();

notesRouter.get("/", NoteController.findAllNotes);

notesRouter.get("/:id", NoteController.findOneNote);

notesRouter.post("/", NoteController.createNote);

notesRouter.patch("/:id", NoteController.updateNote);

notesRouter.delete("/:id", NoteController.deleteNote);