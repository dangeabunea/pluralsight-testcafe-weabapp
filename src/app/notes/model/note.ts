import {v4 as uuidv4} from 'uuid';

export class Note {
  id: string;
  title: string;
  text: string;
  notebookId: string;

  constructor(title: string, text: string, notebookId: string) {
    this.id = uuidv4();
    this.title = title;
    this.text = text;
    this.notebookId = notebookId;
  }
}
