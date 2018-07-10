import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { Route } from '../../../../../../node_modules/@angular/compiler/src/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userdata: any;

  errorsForm = {
    email: '',
    password: ''
  };

  validationMessages = {
    email: {
      required: 'Email obligatorio',
      email: 'Introduzca un email correcto'
    },
    password: {
      required: 'Contraseña obligatoria',
      pattern: 'La contraseña debe contener al menos un número y una letra',
      minlength: 'La contraseña debe contener más de 6 caracteres'
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;

    // tslint:disable-next-line:forin
    for (const field in this.errorsForm) {
      this.errorsForm[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.errorsForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6)
        ]
      ]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    this.authenticationService.registerUser(this.userdata);
    this.router.navigate(['/home']);
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };

    return saveUserdata;
  }
}
