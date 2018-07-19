import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentsService } from '../../services/students.service';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  student: any;
  courses: any[] = [];

  constructor(private sf: FormBuilder,
    private studentsService: StudentsService,
    private coursesService: CoursesService) {

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
    this.studentForm = this.sf.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      courseId: ['', Validators.required]
    });
  }

  onSubmit() {
    this.student = this.saveStudent();
    this.studentsService.postStudent(this.student)
      .subscribe(newStudent => {

      });
    this.studentForm.reset();
  }

  saveStudent() {
    const saveStudent = {
      firstName: this.studentForm.get('firstName').value,
      lastName: this.studentForm.get('lastName').value,
      email: this.studentForm.get('email').value,
      courseId: this.studentForm.get('courseId').value
    };
    return saveStudent;
  }

}
