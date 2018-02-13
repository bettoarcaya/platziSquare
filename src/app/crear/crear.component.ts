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
  direccion: string = null;

  public constructor(
    private route: ActivatedRoute, 
    private lugaresService: LugaresService){

      this.id = this.route.snapshot.params['id'];
    
      if(this.id != '0'){
        this.lugar = this.lugaresService.getLugar(this.id); 
      }
  }

  public guardarLugar(){
    this.direccion = this.lugar.calle + this.lugar.ciudad + this.lugar.pais;
    this.lugaresService.getGeoData(this.direccion)
      .subscribe((result) => {
        this.lugar.lat = result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;

        if(this.id != '0'){
          this.lugar = this.lugaresService.editarLugar(this.lugar);
        }else{
          this.lugar.id = Date.now();
          this.lugaresService.setLugar(this.lugar);
        }

        this.lugar = {}
      });
    //this.lugaresService.setLugar(this.lugar);
  }



}