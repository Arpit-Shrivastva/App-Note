import { routes } from 'src/app/app-routing.module';
import { LoginComponent } from 'src/app/login/login.component';
import { NoteEditComponent } from 'src/app/note-edit/note-edit.component';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { CanDeactivateGuard } from 'src/app/services/can-deactivate.guard';

describe('AppRoutingModule', () => {
    it('should contain route definition for login component', () => {
        expect(routes).toContain({ path: "login", component: LoginComponent });
    });
    it('should protect route to views handling notes data', () => {
        expect(routes).toContain(
            {
                path: "notes", component: NoteViewComponent, canActivate: [ AuthGuard ]
            });
        expect(routes.find(route => route.path === "notes/:id")?.canActivate).toBeTruthy();
    });
    it('should prevent navigation away from note-edit view with unsaved changes', () => {
        expect(routes).toContain({path: "notes/:id", component: NoteEditComponent, canActivate: [ AuthGuard], canDeactivate: [CanDeactivateGuard]});

    });
});