/**modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";


/**components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

/**librerias */
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGuqEpKPHOWXc99M0Va4fH4WwcCWm1T5s'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
