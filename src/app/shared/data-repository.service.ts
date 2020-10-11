import {Injectable} from '@angular/core';
import {Notebook} from '../notes/model/notebook';
import {Note} from '../notes/model/note';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataRepository {
  private readonly notesKey = 'rc-testcafe-sample-app-notes';
  private readonly notebooksKey = 'rc-testcafe-sample-app-notebooks';
  private _notebooks: Notebook[] = [];
  private _notes: Note[] = [];

  constructor() {
    this.init();
  }

  public init(): void {
    const defaultNotebook: Notebook = {
      id: uuidv4(),
      name: 'Sample',
      nbOfNotes: 0
    };

    const nestWeekNotebook: Notebook = {
      id: uuidv4(),
      name: 'Next Week',
      nbOfNotes: 0
    };

    const defaultNote: Note = {
      id: uuidv4(),
      title: 'Sample Note',
      text: 'This is a sample note',
      lastModifiedOn: new Date().toLocaleString(),
      notebookId: defaultNotebook.id
    };

    const goShoppingNote: Note = {
      id: uuidv4(),
      title: 'Shopping',
      text: 'Buy some top quality groceries',
      lastModifiedOn: new Date().toLocaleString(),
      notebookId: nestWeekNotebook.id
    };

    const dentistAppointmentNote: Note = {
      id: uuidv4(),
      title: 'Dentist',
      text: 'Dentist appointment on Tuesday, 18:00',
      lastModifiedOn: new Date().toLocaleString(),
      notebookId: nestWeekNotebook.id
    };

    const anniversaryNote: Note = {
      id: uuidv4(),
      title: 'Anniversary',
      text: 'Our 10 year anniversary on Friday',
      lastModifiedOn: new Date().toLocaleString(),
      notebookId: nestWeekNotebook.id
    };

    this._notebooks = [defaultNotebook, nestWeekNotebook];
    this._notes = [defaultNote, goShoppingNote, dentistAppointmentNote, anniversaryNote];
  }

  public getNotebooks(): Notebook[] {
    return this._notebooks;
  }

  public getNotes(): Note[] {
    return this._notes;
  }

  public insertNote(): void {

  }

  public updateNote(): void {

  }

  public insertNotebook(): void {

  }

  public updateNotebook(): void {

  }

  public deleteNote(): void {

  }

  public deleteNotebook(): void {

  }
}
