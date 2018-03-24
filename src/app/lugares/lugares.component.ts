import { Component } from '@angular/core';
import {LugaresService} from "../servicios/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares = null;
  lat:number = 4.6560663;
  lng:number = -74.0595918;

  public constructor(private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares();
    
  }

  
}