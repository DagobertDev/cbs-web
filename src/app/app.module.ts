import {HttpClientModule} from "@angular/common/http"
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { AllBikesComponent } from './components/all-bikes/all-bikes.component';
import { EditBikeComponent } from './components/edit-bike/edit-bike.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBikesComponent,
    EditBikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
