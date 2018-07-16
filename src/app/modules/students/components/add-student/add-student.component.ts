import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  student: any;

  constructor(private sf: FormBuilder,
              private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentForm = this.sf.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.email ],
      course: ['', Validators.required ]
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
      course: this.studentForm.get('course').value
    };
    return saveStudent;
  }

}
