import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsURL = 'https://approvedapp-249e2.firebaseio.com/students.json';
  studentURL = 'https://approvedapp-249e2.firebaseio.com/students';

  constructor(private http: Http) { }

  postStudent(student: any) {
    const newStudent = JSON.stringify(student);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.studentsURL, newStudent, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
      });
  }

  getStudents() {
    return this.http.get(this.studentsURL)
      .map( response => response.json()
      );
  }

  getStudent(id$: string) {
    const url = `${this.studentURL}/${id$}.json`;
    return this.http.get(url)
      .map( response => response.json()
    );
  }

  putStudent(student: any, id$: string) {
    const newStudent = JSON.stringify(student);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.studentURL}/${id$}.json`;

    return this.http.put(url, newStudent, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
    });
  }

  delStudent(id$: string) {
    const url = `${this.studentURL}/${id$}.json`;

    return this.http.delete(url)
      .map( response => response.json());
  }

}
