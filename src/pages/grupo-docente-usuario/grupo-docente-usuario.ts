import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetallemensajePage} from '../detallemensaje/detallemensaje';
import { AgServices } from '../../services/agacademic.service';
import { AlertController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';

@Component({
  selector: 'page-grupo-docente-usuario',
  templateUrl: 'grupo-docente-usuario.html'
})
export class GrupoDocenteUsuarioPage {

  hayMensajes = true;
  mensajes= [];
  horario:any = {enlaceHorario:""};
  nombre=null;
  grupo:any = {nombre:""};

  constructor(public navCtrl: NavController, private agServices: AgServices, public navParams: NavParams, private nav: NavController, public alertCtrl: AlertController) {

    this.initializeItems();
     /****************   Obtener Nombre Grupo ******************/
     this.nombre = navParams.get('nombre');
     //Obtiene el nameGroup, se crea instancia de navParams para usarlo
     /****************   Obtener Nombre Grupo ******************/
      /****************   Obtener Enlace Horario ******************/
     this.agServices.getUrlHorario(this.nombre).subscribe((horario)=>{this.horario=horario}); 
     /****************   Obtener Enlace Horario ******************/
     if(this.nombre != null){     
      this.grupo = agServices.getGrupo(this.nombre).subscribe((grupo)=>{this.grupo=grupo})
     }
  }

  abrirEnlace() {   
    if(this.horario != null){
      window.open(this.horario.enlaceHorario,'_system','location=yes');
    }      
    else{      
    let alert = this.alertCtrl.create({
      title: 'Hola! :)',
      subTitle: 'Aún no se han cargado horarios',
      buttons: ['OK']
    });
    alert.present();
    }
    };
    initializeItems() {  
      this.agServices.getListadoMensajes().subscribe((mensajes)=>{this.mensajes=mensajes});
      console.log(this.mensajes);
    }
    /*Se pasa como parametro el asunto del mensaje a observar*/
    verDetalle(asunto){      
      this.agServices.setAsuntoMensaje(asunto);
      this.nav.push(DetallemensajePage, {asunto:asunto});  
    }
    verCalendario(){
      this.nav.push(CalendarioPage);  
    }
  
}
