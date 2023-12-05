import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';

import { FormsModule } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { NoteServiceStub } from './noteServiceStub';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;
  let noteService: NoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ NoteAddComponent ],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    noteService = fixture.debugElement.injector.get(NoteService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
