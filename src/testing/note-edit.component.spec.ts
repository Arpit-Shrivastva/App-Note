import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activatedRouteStub';
import { NoteService } from 'src/app/services/note.service';
import { NoteServiceStub } from './noteServiceStub';

import { NoteEditComponent } from 'src/app/note-edit/note-edit.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterService } from 'src/app/services/router.service';
import { RouterServiceStub } from './routerServiceStub';

describe('NoteEditComponent', () => {
  let component: NoteEditComponent;
  let fixture: ComponentFixture<NoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: NoteService, useClass: NoteServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: RouterService, useClass: RouterServiceStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain method `canDeactivate()`', () => {
    const fixture = TestBed.createComponent(NoteEditComponent);
    const component = fixture.componentInstance;
    expect(component.canDeactivate).toBeTruthy();
  });
});
