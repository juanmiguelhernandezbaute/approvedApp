import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[] = [];
  loading = true;

  courseSelected: any;

  constructor(private coursesService: CoursesService) {
    this.coursesService.getCourses()
      .subscribe(courses => {
        for (const id$ in courses) {
          const s = courses[id$];
          s.id$ = id$;
          this.courses.push(courses[id$]);
        }
        this.loading = false;
      });
   }

  ngOnInit() {
  }

  selectCourse(id$) {
    this.courseSelected = id$;
  }
  deleteCourse() {
    this.coursesService.delCourse(this.courseSelected)
      .subscribe( response => {
        this.courses = [];
        this.coursesService.getCourses()
          .subscribe(courses => {
            for (const id$ in courses) {
              const s = courses[id$];
              s.id$ = id$;
              this.courses.push(courses[id$]);
            }
          });
      });
  }

}
