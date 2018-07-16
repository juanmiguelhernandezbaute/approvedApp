import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HomeComponent } from './common/components/home/home.component';

import { AuthenticationService } from './modules/authentication/services/authentication.service';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';

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
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
