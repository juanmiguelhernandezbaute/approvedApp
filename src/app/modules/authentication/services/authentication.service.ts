import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  registerUser(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log(error);
      });
  }

  initSession(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.userId = response.user.uid;
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      });
    return this.userId;
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    firebase.auth().signOut();
  }

  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
