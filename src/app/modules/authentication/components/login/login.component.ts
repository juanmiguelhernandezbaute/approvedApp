import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../../common/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userdata: User = new User();
  userId = '';

  message = false;
  authenticating = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.required
      ],
      password: ['',
        Validators.required
      ]
    });
  }

  onSubmit() {
    this.authenticating = true;
    this.message = false;
    this.userdata.email = this.loginForm.get('email').value;
    this.userdata.password = this.loginForm.get('password').value;
    this.userdata.UID = this.authenticationService.initSession(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.message = true;
        this.authenticating = false;
      }
    }, 2000);
  }

  isAuth() {
    return this.authenticationService.isAuthenticated();
  }

}
