import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app"
import {getAuth, provideAuth} from "@angular/fire/auth"
import {FlexLayoutModule} from "@angular/flex-layout"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {GoogleMapsModule} from "@angular/google-maps"
import {MatButtonModule} from "@angular/material/button"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatIconModule} from "@angular/material/icon"
import {MatInputModule} from "@angular/material/input"
import {MatListModule} from "@angular/material/list"
import {MatMenuModule} from "@angular/material/menu"
import {MatTabsModule} from "@angular/material/tabs"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatTooltipModule} from "@angular/material/tooltip"
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
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {MemberCommunitiesComponent} from './components/member-communities/member-communities.component'
import {NotFoundComponent} from './components/not-found/not-found.component';
import {OverviewBikeComponent} from './components/overview-bike/overview-bike.component';
import {OverviewComponent} from './components/overview/overview.component'
import {ProfileComponent} from './components/profile/profile.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {JwtInterceptor} from "./services/jwt.interceptor";
import { PositionConverterPipe } from './components/pipes/position-converter.pipe';

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
    NavbarComponent,
    OverviewBikeComponent,
    ProfileComponent,
    PositionConverterPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        GoogleMapsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatMenuModule,
        FlexLayoutModule,
        MatListModule,
        MatExpansionModule,
        MatTooltipModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
