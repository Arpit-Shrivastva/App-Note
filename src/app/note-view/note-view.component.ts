import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes: Note[]= [];

  constructor(private noteServces: NoteService) { }

  ngOnInit(): void {
   this.getNotes();
  }

  getNotes(){
    this.noteServces.getNotes().subscribe(
      (notes)=>{
        this.notes=notes;
      },
      (error)=>{
        alert('Failed to Fetch Notes Due to Server Error!!!');
      }
    );
  }  
  
  onNoteAdded($event: any) {
    this.notes.push($event);
  }

  onSearchText(searchVal: string) {
    if (searchVal === '' || !searchVal)
      {
       this.getNotes();
      }
    else {
      this.noteServces.getNotes().subscribe(
        (notes)=>{
          this.notes = this.notes.filter(item => item.title?.startsWith(searchVal));
        },
        (error)=>{
          alert('Failed to Fetch Notes Due to Server Error!!')
        }
      )};
  }
  reload(){
    window.location.reload();
  }
}
