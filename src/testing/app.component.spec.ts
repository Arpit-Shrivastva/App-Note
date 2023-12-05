import { RouterTestingModule } from "@angular/router/testing";
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/header/header.component';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app-routing.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { NoteService } from "src/app/services/note.service";
import { NoteServiceStub } from "./noteServiceStub";
import { SearchComponent } from "src/app/search/search.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { CommonModule } from '@angular/common';
import { NoteAddComponent } from "src/app/note-add/note-add.component";
import { NoteViewComponent } from "src/app/note-view/note-view.component";
import { NoteEditComponent } from "src/app/note-edit/note-edit.component";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NoteComponent } from "src/app/note/note.component";
import { MatCardModule } from "@angular/material/card";
import { NavbarComponent } from "src/app/navbar/navbar.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes), 
      ],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
