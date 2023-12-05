import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/Note';
import { Users } from 'src/app/models/Users';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  note_url = "http://localhost:3000/notes";
  user_url = "http://localhost:3000/users"

  constructor(private https: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.https.get<Note[]>(this.note_url);
  }

  addNote(note: Note): Observable<Note> {
    return this.https.post<Note>(this.note_url, note);
  }

  saveNote(user: Users): Observable<Users> {
    return this.https.post<Users>(this.user_url, user);
  }

  getNote(id: any): Observable<Note> {
    return this.https.get<Note>(`${this.note_url}/${id}`);
  }

  editNote(id: any, note: any): Observable<Note> {
    return this.https.put<Note>(`${this.note_url}/${id}`, note);
  }

  deteleNote(id: any): Observable<Note> {
    return this.https.delete<Note>(`${this.note_url}/${id}`);
  }
}