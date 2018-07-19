import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup;
  course: any;

  constructor(private sf: FormBuilder,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseForm = this.sf.group({
      type: ['', Validators.required ],
      number: ['', Validators.required ],
      name: ['', Validators.required ],
      year: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.course = this.saveCourse();
    this.coursesService.postCourse(this.course)
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
