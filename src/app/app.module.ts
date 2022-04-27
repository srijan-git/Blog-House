import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// let config = {
//   apiKey: "AIzaSyDyT_uO9pFs3nDvJWDGH78z14Rkz8G-Je4",
//   authDomain: "scribe-d63dd.firebaseapp.com",
//   databaseURL: "https://scribe-d63dd.firebaseio.com",
//   projectId: "scribe-d63dd",
//   storageBucket: "scribe-d63dd.appspot.com",
//   messagingSenderId: "236969302096"
// };
// firebase.initializeApp(config);

// let firebaseConfig = {
//   apiKey: "AIzaSyD-Ew1r9IUUiLLlTseHb6gyNfI6pdm-Dmk",
//   authDomain: "scribe-d579c.firebaseapp.com",
//   projectId: "scribe-d579c",
//   storageBucket: "scribe-d579c.appspot.com",
//   messagingSenderId: "748078266788",
//   appId: "1:748078266788:web:24947567f8a061a8ca2931",
//   measurementId: "G-PV63CVJMED"
// };


// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Ew1r9IUUiLLlTseHb6gyNfI6pdm-Dmk",
  authDomain: "scribe-d579c.firebaseapp.com",
  databaseURL: "https://scribe-d579c-default-rtdb.firebaseio.com",
  projectId: "scribe-d579c",
  storageBucket: "scribe-d579c.appspot.com",
  messagingSenderId: "748078266788",
  appId: "1:748078266788:web:24947567f8a061a8ca2931",
  measurementId: "G-PV63CVJMED"
};

firebase.initializeApp(firebaseConfig);


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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
