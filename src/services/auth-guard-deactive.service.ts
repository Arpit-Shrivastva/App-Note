import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteEditComponent } from 'src/app/note-edit/note-edit.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDeactiveService implements CanDeactivate<NoteEditComponent> {

  canDeactivate(
    component: NoteEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
}
