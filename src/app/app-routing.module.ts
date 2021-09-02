import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router"
import {LoginComponent} from "./components/login/login.component"
import {OverviewComponent} from "./components/overview/overview.component"
import {RegistrationComponent} from "./components/registration/registration.component"
import {AuthGuard} from "./services/auth.guard"


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {requireLoggedOut: true}},
  {path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard], data: {requireLoggedOut: true}},
  {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
