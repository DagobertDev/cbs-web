import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app"
import {getAuth, provideAuth} from "@angular/fire/auth"
import {FormsModule} from "@angular/forms"
import {BrowserModule} from '@angular/platform-browser';
import {environment} from "../environments/environment"

import {AppComponent} from './app.component';
import {AllBikesComponent} from './components/all-bikes/all-bikes.component';
import {EditBikeComponent} from './components/edit-bike/edit-bike.component';
import {LoginComponent} from './components/login/login.component';
import {MemberCommunitiesComponent} from './components/member-communities/member-communities.component'
import {RegistrationComponent} from './components/registration/registration.component';
import {JwtInterceptor} from "./services/jwt.interceptor"

@NgModule({
  declarations: [
    AppComponent,
    AllBikesComponent,
    EditBikeComponent,
    RegistrationComponent,
    LoginComponent,
    MemberCommunitiesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
