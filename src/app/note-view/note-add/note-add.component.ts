import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from 'src/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  constructor(private noteServices: NoteService, private _snackBar:MatSnackBar) { }
  ngOnInit(): void { };
  showMe: boolean = false;
  Note: Note = { id: 0, title: '', content: '', reminderDate: '', category: ''}

  @Output()
  NoteAdded: EventEmitter<any> = new EventEmitter<any>();

  addNote(noteForm: any) {
  this.noteServices.addNote(noteForm.value).subscribe({
    next: data => {
      this._snackBar.open('Note added successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
    },
    error: err => {
      alert("Failure while connecting to server, try again!!");
    }
  })
  window.location.reload();
  noteForm.resetForm();
}

  toggleTag() {
    this.showMe = !this.showMe;
  }
}



// addNote(noteForm: any) {
//   this.noteServices.addNote(noteForm.value).subscribe({
//     next: data => {
//       this._snackBar.open('Note added successfully', 'success', {
//         duration: 5000,
//         panelClass: ['mat-toolbar', 'mat-primary']
//       })
//     },
//     error: err => {
//       alert("Failure while connecting to server, try again!!");
//     }
//   })
//   noteForm.resetForm();
// }
