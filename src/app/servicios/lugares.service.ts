import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()

export class LugaresService{
    aux: any = null;
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia', descripcion: "descripccion corta"},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita', descripcion: "descripccion corta"},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices', descripcion: "descripccion corta"},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Sushi Suhiroll', descripcion: "descripccion corta"},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, nombre:'Hotel la Gracia', descripcion: "descripccion corta"},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Zapatería el Clavo', descripcion: "descripccion corta"},
    ];

    public constructor(
        private http: Http, 
        private router: Router,
        //private af:AngularFire
    ){ }
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
          this.router.navigate(['/Lugares']);
        }
      });
    }
}