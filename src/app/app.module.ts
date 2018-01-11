/**modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

/**servicios */
import {LugaresService} from "./servicios/lugares.service";

/**components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LugaresComponent } from './lugares/lugares.component';
import { CrearComponent } from './crear/crear.component';

/**librerias */
import { AgmCoreModule } from '@agm/core';
/*import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';*/
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Lugares', component: LugaresComponent},
  {path:'Crear/:id', component: CrearComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LugaresComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,*/ // imports firebase/firestore, only needed for database features
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGuqEpKPHOWXc99M0Va4fH4WwcCWm1T5s'
    })
    
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
