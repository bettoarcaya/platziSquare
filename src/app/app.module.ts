/**modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {LugaresService} from "./servicios/lugares.service";


/**components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LugaresComponent } from './lugares/lugares.component';

/**librerias */
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Lugares', component: LugaresComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LugaresComponent,
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
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
