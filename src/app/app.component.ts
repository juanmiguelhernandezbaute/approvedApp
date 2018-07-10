import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2oWuwSAQP9hKAn4I5xGyQd1oJNEnnugk',
      authDomain: 'approvedapp-249e2.firebaseapp.com'
    });
  }

}
