import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notebook} from "../notes/model/notebook";
import {FeedbackViewModel} from "../feedback/feedback.component";
import {Note} from "../notes/model/note";
import {DataRepository} from './data-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = window["cfgApiBaseUrl"] + "/api";
  public ALL_NOTEBOOKS_URL = `${this.BASE_URL}/notebooks/all`;
  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
  private SAVE_UPDATE_NOTEBOOK = `${this.BASE_URL}/notebooks`;
  private DELETE_NOTEBOOK_URL = `${this.BASE_URL}/notebooks/`;
  private ALL_NOTES_URL = `${this.BASE_URL}/notes/all`;
  private NOTES_BY_NOTEBOOK_URL = `${this.BASE_URL}/notes/byNotebook/`;
  private SAVE_UPDATE_NOTE_URL = `${this.BASE_URL}/notes`;
  private DELETE_NOTE_URL = `${this.BASE_URL}/notes/`;

  constructor(private http: HttpClient, private _dataRepository: DataRepository) {

  }

  getAllNotebooks(): Notebook[] {
    return this._dataRepository.getNotebooks();
  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }

  postNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(this.SAVE_UPDATE_NOTEBOOK, notebook);
  }

  deleteNotebook(id: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
  }

  getAllNotes(): Note[] {
    return this._dataRepository.getNotes();
  }

  getNotesByNotebook(notebookId: string): Note[] {
    const allNotes = this._dataRepository.getNotes();
    return allNotes.filter(x => x.notebookId === notebookId);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.SAVE_UPDATE_NOTE_URL, note);
  }

  deleteNote(noteId:string):Observable<any>{
    return this.http.delete(this.DELETE_NOTE_URL + noteId);
  }
}
