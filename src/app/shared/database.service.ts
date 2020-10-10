import {Injectable} from '@angular/core';
import {Notebook} from '../notes/model/notebook';
import {Note} from '../notes/model/note';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly notesKey = 'rc-testcafe-sample-app-notes';
  private readonly notebooksKey = 'rc-testcafe-sample-app-notebooks';

  constructor() {
  }

  public getNotebooks(): Notebook[] {
    return [];
  }

  public getNotes(): Note[] {
    return [];
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
