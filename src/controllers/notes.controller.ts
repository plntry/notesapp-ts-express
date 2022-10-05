import { Request, Response } from "express";
import { BaseINote, INote } from "../repositories/interfaces/INote";
import * as NoteService from "../services/notesService";
import { pushStatsToResult } from "../helpers/pushStatsToResultHelper";
import { Note } from "../repositories/models/notes.model";

export const findAllNotes = async (req: Request, res: Response) => {
    try {
        const notes: Note[] = await Note.findAll();
  
        res.status(200).send(notes);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

export const findOneNote = async (req: Request, res: Response) => {
        const { id } = req.params;
  
    try {
        const note: Note | null = await Note.findByPk(id);
    
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
        const note: Note = await Note.create({ ...req.body });
  
        res.status(201).json(note);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

export const updateNote = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
        await Note.update({ ...req.body }, { where: { id } });
        
        const updatedNote: Note | null = await Note.findByPk(id);
        
        res.status(201).send(updatedNote);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await Note.destroy({ where: { id } });

        res.sendStatus(204);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}

export const getStats = async (req: Request, res: Response) => {
    try {
        let result:Array<object> = [];
        const notes: Note[] = await Note.findAll();
        
        let categories = Array.from(new Set(notes.map(note => note.category)));      

        pushStatsToResult(result, notes, categories);

        res.status(200).send(result);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}