import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from 'src/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private noteServices: NoteService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    confirmPassword: ['', Validators.required],
    gender: ['', Validators.required],
    age: [0, [Validators.required, this.validateAge]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[789]\\d{9}$')]],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]]
    })
  }, { validators: [this.checkpass] });

  get myfirstname() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get("lastName") }
  get dateOfBirth() { return this.registerForm.get("dateOfBirth") }
  get phone() { return this.registerForm.get("phone"); }
  get password() { return this.registerForm.get("password"); }
  get confirmPassword() { return this.registerForm.get("confirmPassword"); }
  get email() { return this.registerForm.get('email') }
  get gender() { return this.registerForm.get('gender') }
  get age() { return this.registerForm.get('age') }
  get street() { return this.registerForm.get('street') }
  get city() { return this.registerForm.get('city') }
  get state() { return this.registerForm.get('state') }
  get zipCode() { return this.registerForm.get('zipCode') }

  validateAge(c: AbstractControl) {
    const ageCheck = c.value;
    if (ageCheck > 0 && ageCheck <= 17) {
      return { invalidAge: true };
    }
    return null;
  }

  checkpass(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { passwordMismatch: true }
    }
    return null;
  }

  onSubmit(formData: any) {
    this.noteServices.saveNote(formData.value).subscribe({
      next: data => {
        this._snackBar.open('Note added successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.registerForm.reset();
      },
      error: err => {
        alert("Failure while connecting to the server, try again!!");
      }
    });
  }
}


