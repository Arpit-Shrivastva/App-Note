import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  
  @Input()
   Note! : Note;

   ngOnInit(): void { 
 
   }
   constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute) { };

  showButtons!:boolean;

  deleteIt(){
    this.noteService.deteleNote(this.Note.id).subscribe(data =>{
      console.log(data);
    })
  }
}
