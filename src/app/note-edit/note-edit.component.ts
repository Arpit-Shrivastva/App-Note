import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';
import { NoteService } from 'src/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note = {
    id: 0,
    title: '',
    content: ''
  }

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data =>{
      let id = data.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe(data=>{
        this.note = data;
      })
    })
  }



  editNote(){
    this.noteService.editNote(this.note.id, this.note).subscribe(data=>{
      this.note = data;
      confirm("Do You Want To Update The Details??");
      console.log(data);

      this.route.navigateByUrl('/home');
    })
  }

  canExit(){
    if(this.note.title !== " " || this.note.content !== " "){
      return confirm("Do You Want To Exit Without Saving The Values ??")
    }
    else{
      return true;
    }
  }
}
