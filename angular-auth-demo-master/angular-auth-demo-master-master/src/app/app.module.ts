import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { OptionsComponent } from './options/options.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAvgY_0K-XGwlKMcq-cTXA0WkfzZWb20ZA',
  authDomain: 'autopr-7c31f.firebaseapp.com',
  databaseURL: 'https://autopr-7c31f.firebaseio.com',
  projectId: 'autopr-7c31f',
  storageBucket: 'autopr-7c31f.appspot.com',
  messagingSenderId: '782117348667'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
