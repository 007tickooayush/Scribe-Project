import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app'
import 'firebase/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {NgxEditorModule} from 'ngx-editor';
import {NgxTextEditorModule} from 'ngx-text-editor';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
let firebaseConfig = {
  apiKey: "AIzaSyA9Jb-dwy9dIaMlRCwlmMyEMKMYVsrVIxQ",
  authDomain: "scribe-24211.firebaseapp.com",
  databaseURL: "https://scribe-24211.firebaseio.com",
  projectId: "scribe-24211",
  storageBucket: "scribe-24211.appspot.com",
  messagingSenderId: "574094757650",
  appId: "53d7b4679f8a2bb2f7edcb", //1:574094757650:web:53d7b4679f8a2bb2f7edcb
  //measurementId: "G-MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    NgxTextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
