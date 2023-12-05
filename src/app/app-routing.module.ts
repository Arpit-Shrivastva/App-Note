import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NoteAddComponent } from './note-view/note-add/note-add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardDeactiveService } from 'src/services/auth-guard-deactive.service';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: NoteViewComponent, canActivate:[AuthGuardService] },
  { path: 'register-new-user', component: RegisterFormComponent, canActivate: [AuthGuardService] },
  { path: 'note-edit/:id', component: NoteEditComponent, canDeactivate: [AuthGuardDeactiveService]},
  { path: 'add', component: NoteAddComponent, canActivate: [AuthGuardService] },
  { path: 'login', component:LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
