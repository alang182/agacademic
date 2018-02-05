import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { CalendarioPage } from '../calendario/calendario';
import { MensajesPage} from '../mensajes/mensajes';
import { DetallemensajePage} from '../detallemensaje/detallemensaje';
import { AddUserPage} from '../add-user/add-user';

@Component({
  selector: 'page-grupo-docente-admin',
  templateUrl: 'grupo-docente-admin.html'
})
export class GrupoDocenteAdminPage {

  
  nombre=null;
  grupo:any = {nombre:""};
  hayMensajes = true;
  mensajes= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices, private nav: NavController) {

    /****************   Obtener Nombre Grupo ******************/
    this.nombre = navParams.get('nombre'); 
    //Obtiene el nameGroup, se crea instancia de navParams para usarlo

    this.grupo.nombre = this.agServices.getNombreGrupoDocente();

    this.agServices.getListadoMensajes().subscribe((mensajes)=>{this.mensajes=mensajes});    
    
    /****************   Obtener Nombre Grupo ******************/

    if(this.nombre != null){
      this.grupo = agServices.getGrupoDocencia(this.nombre).subscribe((grupo)=>{this.grupo=grupo})
    }
  }

  goToCalendar(params){
    this.navCtrl.push(CalendarioPage);
  }

  msg() {
  this.navCtrl.push(MensajesPage);
  }

  /*Se pasa como parametro el asunto del mensaje a observar*/
  verDetalle(asunto){
    this.agServices.setAsuntoMensaje(asunto);
    this.nav.push(DetallemensajePage, {asunto:asunto});  
  }  
  goToAddUser(){
    this.navCtrl.push(AddUserPage);
  }
  
}
