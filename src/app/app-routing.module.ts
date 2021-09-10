import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router"
import {LoginComponent} from "./components/login/login.component"
import {MemberCommunitiesComponent} from "./components/member-communities/member-communities.component"
import {NotFoundComponent} from "./components/not-found/not-found.component"
import {OverviewComponent} from "./components/overview/overview.component"
import {ProfileComponent} from "./components/profile/profile.component"
import {RegistrationComponent} from "./components/registration/registration.component"
import {AuthGuard} from "./services/auth.guard"


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {requireLoggedOut: true}},
  {path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard], data: {requireLoggedOut: true}},
  {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
  {path: 'communities', component: MemberCommunitiesComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
