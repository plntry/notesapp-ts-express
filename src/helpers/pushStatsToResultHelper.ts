import { INote } from "../repositories/interfaces/INote";     
import { Note } from "../repositories/models/notes.model";

export function pushStatsToResult (result: Array<object>, notes: Note[], categories: Array<string>) {
    let activeNotesList = notes.filter(note => note.status === 'active');
    let archivedNotesList = notes.filter(note => note.status === 'archived');
        
    categories.forEach(category => {
        let numOfActiveNotes = activeNotesList.filter(note => note.category === category).length;
        let numOfArchivedNotes = archivedNotesList.filter(note => note.category === category).length;
        
        result.push(
            {
                category: category,
                active: numOfActiveNotes,
                archived: numOfArchivedNotes,
            }
        );
    });
}