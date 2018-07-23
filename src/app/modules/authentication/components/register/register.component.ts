import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../../common/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User = new User();

  errorsForm = {
    email: '',
    password: ''
  };

  validationMessages = {
    email: {
      required: 'Correo obligatorio',
      email: 'Introduzca un correo electrónico correcto'
    },
    password: {
      required: 'Contraseña obligatoria',
      pattern: 'La contraseña debe contener al menos un número, una letra mayúscula, una letra minúscula y un caracter especial'
        + '(Caracteres especiales permitidos "@ $ ! % * ? & .").\n',
      minlength: 'La contraseña debe contener más de 8 caracteres.\n'
    }
  };

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9\d$@$!%*?&.]+)$'),
        Validators.minLength(8)
      ]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('password').value;
    this.authenticationService.registerUser(this.user);
  }

}
