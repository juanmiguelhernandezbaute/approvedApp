import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseForm: FormGroup;
  course: any;
  id: string;

  courses: any[] = [];

  constructor(private sf: FormBuilder,
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
      .subscribe(parameters => {
        this.id = parameters['id'];
        this.coursesService.getCourse(this.id)
          .subscribe(course => this.course = course);
      });

    this.coursesService.getCourses()
      .subscribe(courses => {
        for (const id$ of Object.keys(courses)) {
          const s = courses[id$];
          s.id$ = id$;
          this.courses.push(courses[id$]);
        }
      });
  }

  ngOnInit() {
    this.courseForm = this.sf.group({
      type: ['', Validators.required],
      number: ['', Validators.required],
      name: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  onSubmit() {
    this.course = this.saveCourse();
    this.coursesService.putCourse(this.course, this.id)
      .subscribe(newCourse => {

      });
    this.courseForm.reset();
  }

  saveCourse() {
    const saveCourse = {
      type: this.courseForm.get('type').value,
      number: this.courseForm.get('number').value,
      name: this.courseForm.get('name').value,
      year: this.courseForm.get('year').value
    };
    return saveCourse;
  }

}
