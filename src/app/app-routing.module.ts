import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { GuardService } from './modules/authentication/services/guard.service';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { StudentsComponent } from './modules/students/components/students/students.component';
import { AddStudentComponent } from './modules/students/components/add-student/add-student.component';
import { EditStudentComponent } from './modules/students/components/edit-student/edit-student.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { AddCourseComponent } from './modules/courses/components/add-course/add-course.component';
import { EditCourseComponent } from './modules/courses/components/edit-course/edit-course.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  { path: 'students', component: StudentsComponent, canActivate: [GuardService] },
  { path: 'addStudent', component: AddStudentComponent, canActivate: [GuardService] },
  { path: 'editStudent/:id', component: EditStudentComponent, canActivate: [GuardService] },
  { path: 'courses', component: CoursesComponent, canActivate: [GuardService] },
  { path: 'addCourse', component: AddCourseComponent, canActivate: [GuardService] },
  { path: 'editCourse/:id', component: EditCourseComponent, canActivate: [GuardService] },
  { path: 'notfound', component: ErrorPageComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
