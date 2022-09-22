import express from "express";
import * as NoteController from "../controllers/notes.controller";
import { createNoteSchema } from "../validation/schemas/createNoteValidSchema";
import { editNoteSchema } from "../validation/schemas/editNoteValidSchema";
import validate from "../validation/validate";

export const notesRouter = express.Router();

notesRouter.post("/", validate(createNoteSchema), NoteController.createNote);

notesRouter.delete("/:id", NoteController.deleteNote);

notesRouter.patch("/:id", validate(editNoteSchema), NoteController.updateNote);

notesRouter.get("/stats", NoteController.getStats);

notesRouter.get("/:id", NoteController.findOneNote);

notesRouter.get("/", NoteController.findAllNotes);

