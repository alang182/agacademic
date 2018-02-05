import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';
import { HorarioPage } from '../horario/horario';
import { MensajesPage} from '../mensajes/mensajes';
import { DetallemensajePage} from '../detallemensaje/detallemensaje';
import { AgServices } from '../../services/agacademic.service';

@Component({
  selector: 'page-grupo-coordinador-admin',
  templateUrl: 'grupo-coordinador-admin.html'
})
export class GrupoCoordinadorAdminPage {

  hayMensajes = true;
  mensajes= [];
  nombre=null;
  grupo:any = {nombre:""};
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,
    private agServices: AgServices,private nav: NavController) {

      this.initializeItems();
     /****************   Obtener Nombre Grupo ******************/
     this.nombre = navParams.get('nombre');
     //Obtiene el nameGroup, se crea instancia de navParams para usarlo

     this.grupo.nombre = this.agServices.getNombreGrupo();
     /****************   Obtener Nombre Grupo ******************/

     if(this.nombre != null){
     
      this.grupo = agServices.getGrupo(this.nombre).subscribe((grupo)=>{this.grupo=grupo})
    }
                     
  }

  initializeItems() {   
  this.agServices.getListadoMensajes().subscribe((mensajes)=>{this.mensajes=mensajes});
  }

  goToCalendar(params){    
      if (!params) params = {};
      this.navCtrl.push(CalendarioPage);
  }

  goToHorario(params){
    
    if (!params) params = {};
    this.navCtrl.push(HorarioPage);
  } 

  msg() {
  this.navCtrl.push(MensajesPage);
  }

  /*Se pasa como parametro el asunto del mensaje a observar*/
  verDetalle(asunto){
    this.agServices.setAsuntoMensaje(asunto);
    this.nav.push(DetallemensajePage, {asunto:asunto});  
  }
  
}
