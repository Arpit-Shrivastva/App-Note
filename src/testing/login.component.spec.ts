import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/app/login/login.component';

describe('LoginComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, MatToolbarModule, MatInputModule, MatFormFieldModule, NoopAnimationsModule],
            declarations: [LoginComponent],
            providers: []
            }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});