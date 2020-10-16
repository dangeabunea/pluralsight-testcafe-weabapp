import {Injectable} from '@angular/core';
import {Notebook} from '../notes/model/notebook';
import {Note} from '../notes/model/note';

@Injectable({
  providedIn: 'root'
})
export class DataRepository {
  private _notebooks: Notebook[] = [];
  private _notes: Note[] = [];

  constructor() {
    this.init();
  }

  public getNotebooks(): Notebook[] {
    return this._notebooks;
  }

  public getNotes(): Note[] {
    return this._notes;
  }

  private init(): void {
      const defaultNotebook: Notebook = new Notebook('Sample');
      const nextWeekNotebook: Notebook = new Notebook('This Week');

      const defaultNote: Note = new Note('Sample Note', 'This is a sample note', defaultNotebook.id);
      const goShoppingNote: Note = new Note('Shopping', 'Buy some top quality groceries', nextWeekNotebook.id);
      const dentistAppointmentNote: Note = new Note('Dentist', 'Dentist appointment on Tuesday, 18:00', nextWeekNotebook.id);
      const anniversaryNote: Note = new Note('Anniversary', 'Our 10 year anniversary on Friday', nextWeekNotebook.id);

      this._notebooks = [defaultNotebook, nextWeekNotebook];
      this._notes = [defaultNote, goShoppingNote, dentistAppointmentNote, anniversaryNote];
  }
}
