import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';

@Injectable()

export class LugaresService{
    aux: any = null;
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Sushi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, nombre:'Hotel la Gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Zapatería el Clavo'},
    ];

    public constructor(private http: Http){ }
    //obtenemos direccion desde la api de google maps
    public getGeoData(direccion){
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
    
    public getLugares(){
        return this.lugares;
    }
    public getLugar(id){
        return this.lugares.filter((lugar) => {
            return lugar.id == id;
        })[0] || null;
    }
    public setLugar(lugar){
        this.lugares.push(lugar);
        //alert(lugar.nombre + " agregado correctamente!");
        swal({
            title: 'success!',
            text: lugar.nombre + ' Agregado correctamente!',
            type: 'success',
            confirmButtonText: 'Ok'
          });
    }
    public editarLugar(lugEdit){
      this.lugares.filter((lugar) => {
        if(lugar.id == lugEdit.id){
          lugar.id = lugEdit.id;
          lugar.nombre = lugEdit.nombre;
          lugar.plan = lugEdit.plan;
          lugar.distancia = lugEdit.distancia;
          lugar.cercania = lugEdit.cercania;
          swal({
            title: 'success!',
            text: lugar.nombre + ' Editado correctamente!',
            type: 'success',
            confirmButtonText: 'Ok'
          });
        }
      });
    }
}