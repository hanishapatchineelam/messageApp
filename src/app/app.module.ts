import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./services/auth.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import {
  MatInputModule,
} from "@angular/material/input";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComposeMessagesComponent } from './components/compose-messages/compose-messages.component';
import { InboxMessagesComponent } from './components/inbox-messages/inbox-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SentMessagesComponent,
    DashboardComponent,
    ComposeMessagesComponent,
    InboxMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
