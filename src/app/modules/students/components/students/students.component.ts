import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [];

  constructor(private studentsService: StudentsService) {
    this.studentsService.getStudents()
      .subscribe(students => {
        for (const id$ in students) {
          const s = students[id$];
          s.id$ = id$;
          this.students.push(students[id$]);
        }
      });
   }

  ngOnInit() {
  }

  deleteStudent(id$) {
    this.studentsService.delStudent(id$)
      .subscribe( response => {
        this.students = [];
        this.studentsService.getStudents()
          .subscribe(students => {
            for (const id$ in students) {
              const s = students[id$];
              s.id$ = id$;
              this.students.push(students[id$]);
            }
          });
      });
  }

}
