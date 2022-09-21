import { BaseINote, INote } from "../repositories/interfaces/INote";
import { INotes } from "../repositories/interfaces/INotes";
import notes from "../repositories/data/notes";

export const findAll = async (): Promise<INote[]> => Object.values(notes);

export const find = async (id: number): Promise<INote> => notes[id];

export const create = async (newNote: BaseINote): Promise<INote> => {
    const id = new Date().valueOf();

    notes[id] = {
        id,
        ...newNote,
    };

    return notes[id];
}
