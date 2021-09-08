import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app"
import {getAuth, provideAuth} from "@angular/fire/auth"
import {FormsModule} from "@angular/forms"
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatInputModule} from "@angular/material/input"
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from "../environments/environment"
import {AppRoutingModule} from "./app-routing.module"

import {AppComponent} from './app.component';
import {AvailableBikesComponent} from './components/available-bikes/available-bikes.component';
import {CommunityBikesComponent} from './components/community-bikes/community-bikes.component';
import {CommunityMembersComponent} from './components/community-members/community-members.component';
import {CommunityOverviewComponent} from './components/community-overview/community-overview.component';
import {EditBikeComponent} from './components/edit-bike/edit-bike.component';
import {LoginComponent} from './components/login/login.component';
import {MemberCommunitiesComponent} from './components/member-communities/member-communities.component'
import {NotFoundComponent} from './components/not-found/not-found.component';
import {OverviewComponent} from './components/overview/overview.component'
import {RegistrationComponent} from './components/registration/registration.component';
import {JwtInterceptor} from "./services/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CommunityBikesComponent,
    EditBikeComponent,
    RegistrationComponent,
    LoginComponent,
    MemberCommunitiesComponent,
    OverviewComponent,
    NotFoundComponent,
    CommunityOverviewComponent,
    CommunityMembersComponent,
    AvailableBikesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
