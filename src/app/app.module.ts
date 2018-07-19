import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-6-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { StudentsModule } from './modules/students/students.module';
import { CoursesModule } from './modules/courses/courses.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { HomeComponent } from './common/components/home/home.component';

import { AuthenticationService } from './modules/authentication/services/authentication.service';
import { StudentsService } from './modules/students/services/students.service';
import { CoursesService } from './modules/courses/services/courses.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    AppRoutingModule,
    AuthenticationModule,
    StudentsModule,
    CoursesModule
  ],
  providers: [
    AuthenticationService,
    StudentsService,
    CoursesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
