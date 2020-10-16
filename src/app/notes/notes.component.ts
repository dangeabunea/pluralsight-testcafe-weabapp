import {Component, OnInit} from '@angular/core';
import {Notebook} from './model/notebook';
import {Note} from './model/note';
import {DataRepository} from '../shared/data-repository.service';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private _notebooks: Notebook[] = [];
  private _notes: Note[] = [];
  private _selectedNotebook: Notebook;
  private _searchText: string;

  constructor(private _dataRepository: DataRepository, private _loginService: LoginService) {
  }

  public ngOnInit(): void {
    this._notebooks = this._dataRepository.getNotebooks();
    this._notes = this._dataRepository.getNotes();
  }

  public get searchText(): string {
    return this._searchText;
  }

  public set searchText(value: string) {
    this._searchText = value;
  }

  public get selectedNotebook(): Notebook {
    return this._selectedNotebook;
  }

  public get notes(): Note[] {
    return this._notes;
  }

  public get notebooks(): Notebook[] {
    return this._notebooks;
  }

  public createNotebook() {
    if (this._loginService.hasPremiumSubscription) {
      const newNotebook: Notebook = new Notebook('New Notebook');
      this.notebooks.push(newNotebook);
    }
  }

  public deleteNotebook(notebook: Notebook) {
    if (confirm('Are you sure you want to delete notebook?')) {
      const indexOfNotebook = this.notebooks.indexOf(notebook);
      const notesInNotebook = this.notes.filter(x => x.notebookId === notebook.id);
      notesInNotebook.forEach(x => {
        const index = this.notes.indexOf(x);
        this.notes.splice(index, 1);
      });
      this.notebooks.splice(indexOfNotebook, 1);
      this.selectAllNotes();
    }
  }

  public deleteNote(note: Note) {
    if (confirm('Are you sure you want to delete this note?')) {
      const indexOfNotebook = this.notes.indexOf(note);
      this.notes.splice(indexOfNotebook, 1);
    }
  }

  public createNote(notebookId: string) {
    const newNote: Note = new Note('', '', notebookId);
    this.notes.push(newNote);
  }

  public selectNotebook(notebook: Notebook) {
    this._selectedNotebook = notebook;
  }

  public selectAllNotes() {
    this._selectedNotebook = null;
  }

  public get displayedNotes(): Note[] {
    if (this.selectedNotebook) {
      return this.notes.filter(x => x.notebookId === this.selectedNotebook.id);
    }
    return this.notes;
  }

  public get canCreateNotebook(): boolean {
    return this._loginService.hasPremiumSubscription;
  }
}
