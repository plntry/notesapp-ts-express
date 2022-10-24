import { BaseINote, INote } from "../repositories/interfaces/INote";
import notes from "../repositories/data/notes";

export const findAll = async (): Promise<INote[]> => Object.values(notes);

export const find = async (id: number): Promise<INote> => notes[id];

export const create = async (newNote: BaseINote): Promise<INote> => {
    const id = new Date().valueOf();

    notes[id] = {
        id: id,
        date: new Date(),
        ...newNote,
    };

    return notes[id];
}

export const update = async (
    id: number,
    noteToUpdate: BaseINote
): Promise<INote | null> => {
    const note = await find(id);

    if (!note) {
        return null;
    }

    Object.assign(note, noteToUpdate);

    return notes[id];
}

export const remove = async (id: number): Promise<null | void> => {
    const note = await find(id);

    if (!note) {
        return null;
    }

    delete notes[id];
}
