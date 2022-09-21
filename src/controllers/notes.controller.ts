import express, { Request, Response } from "express";
import { BaseINote, INote } from "../repositories/interfaces/INote";
import * as NoteService from "../services/notesService";

export const findAllNotes = async (req: Request, res: Response) => {
    try {
      const notes: INote[] = await NoteService.findAll();
  
      res.status(200).send(notes);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
}

export const findOneNote = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const note: INote = await NoteService.find(id);
  
      if (note) {
        return res.status(200).send(note);
      }
  
      res.status(404).send("Note not found");
    } catch (e: any) {
      res.status(500).send(e.message);
    }
}

export const createNote = async (req: Request, res: Response) => {
    try {
      const note: BaseINote = req.body;
      
      const newNote = await NoteService.create(note);
  
      res.status(201).json(newNote);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
}

export const updateNote = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const status: string = req.params.status;
  
    try {
      const noteToUpdate: INote = req.body;
  
      const existingNote: INote = await NoteService.find(id);
  
      if (existingNote) {
        const updatedNote = await NoteService.update(id, status, noteToUpdate);
        return res.status(200).json(updatedNote);
      }
  
      const newNote = await NoteService.create(noteToUpdate);
  
      res.status(201).json(newNote);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await NoteService.remove(id);
  
      res.sendStatus(204);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
}