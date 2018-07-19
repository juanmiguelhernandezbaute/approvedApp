import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesURL = 'https://approvedapp-249e2.firebaseio.com/courses.json';
  courseURL = 'https://approvedapp-249e2.firebaseio.com/courses';

  constructor(private http: Http) { }

  postCourse(course: any) {
    const newCourse = JSON.stringify(course);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.coursesURL, newCourse, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
      });
  }

  getCourses() {
    return this.http.get(this.coursesURL)
      .map( response => response.json()
      );
  }

  getCourse(id$: string) {
    const url = `${this.courseURL}/${id$}.json`;
    return this.http.get(url)
      .map( response => response.json()
    );
  }

  putCourse(course: any, id$: string) {
    const newCourse = JSON.stringify(course);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.courseURL}/${id$}.json`;

    return this.http.put(url, newCourse, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
    });
  }

  delCourse(id$: string) {
    const url = `${this.courseURL}/${id$}.json`;

    return this.http.delete(url)
      .map( response => response.json());
  }

}
