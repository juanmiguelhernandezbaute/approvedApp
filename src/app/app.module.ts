import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { StudentsModule } from './modules/students/students.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { HomeComponent } from './common/components/home/home.component';

import { AuthenticationService } from './modules/authentication/services/authentication.service';
import { StudentsService } from './modules/students/services/students.service';

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
    AppRoutingModule,
    AuthenticationModule,
    StudentsModule
  ],
  providers: [AuthenticationService, StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
