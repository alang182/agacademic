import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { CalendarioPage } from '../calendario/calendario';
@Component({
  selector: 'page-grupo-estudiante',
  templateUrl: 'grupo-estudiante.html'
})
export class GrupoEstudiantePage {
  
  nombre=null;
  grupo:any = {nombre:""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices) {
    this.nombre = navParams.get('nombre');
    //obtiene el nameGroup, se crea instancia de navParams para usarlo
    if(this.nombre != null){
      this.grupo = agServices.getGrupoDocencia(this.nombre).subscribe((grupo)=>{this.grupo=grupo})
    }                     
  }
  goToCalendar(params){ 
      this.navCtrl.push(CalendarioPage);
  }
}
