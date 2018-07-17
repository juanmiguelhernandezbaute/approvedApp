import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentForm: FormGroup;
  student: any;
  id: string;

  constructor(private sf: FormBuilder,
              private studentsService: StudentsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.params
                  .subscribe( parameters => {
                    this.id = parameters['id'];
                    this.studentsService.getStudent(this.id)
                      .subscribe( student => this.student = student);
                  });
               }

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
      this.studentsService.putStudent(this.student, this.id)
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
