import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsURL = 'https://approvedapp-249e2.firebaseio.com/students.json';

  constructor(private http: Http) { }

  postStudent(student: any){
    const newStudent = JSON.stringify(student);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.studentsURL, newStudent, {headers})
      .map( result => {
        console.log(result.json());
        return result.json();
      });
  }

}
