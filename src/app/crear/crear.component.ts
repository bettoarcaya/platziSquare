import { Component } from '@angular/core';
import {LugaresService} from "../servicios/lugares.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  title = 'PlatziSquare';
  lugar: any = {}
  id: any = null;

  public constructor(private route: ActivatedRoute, private lugaresService: LugaresService){ 
    this.id = this.route.snapshot.params['id'];
    
    if(this.id != '0'){
      this.lugar = this.lugaresService.getLugar(this.id); 
    }
  }
}