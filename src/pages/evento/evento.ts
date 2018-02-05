import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { AlertController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';
/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage { 

  evento:any = {fecha:"", asunto:"", horaInicio:"", horaFin:""};
  mesEvento:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController,  private agServices: AgServices,public alertCtrl: AlertController) {

     /****************   Obtener dia seleccionado ******************/   
     this.evento.fecha = navParams.get('fechaEvento');      

     //  this.evento.day = navParams.get('day'); 
     this.mesEvento = navParams.get('mes'); 
    //  this.evento.year = navParams.get('year'); 
     /****************   Obtener dia seleccionado ******************/     
  }

  guardarEvento(){

    if (this.agServices.getRol() === "coordinador") {
      this.agServices.setEventoGrupo(this.mesEvento, this.evento.asunto, this.evento.fecha, this.evento.horaFin, this.evento.horaFin);
      this.evento = {fecha:"", asunto:"", horaInicio:"", horaFin:""};  
      let alert = this.alertCtrl.create({
        title: 'Hola! :)',
        subTitle: 'Evento creado exitosamente',
        buttons: ['OK']
      });
      alert.present();  
      this.nav.push(CalendarioPage);  
    }
    
    if (this.agServices.getRol() === "docente") {
      this.agServices.setEventoGrupoDocente(this.mesEvento, this.evento.asunto, this.evento.fecha, this.evento.horaFin, this.evento.horaFin);
      this.evento = {fecha:"", asunto:"", horaInicio:"", horaFin:""};
  
      let alert = this.alertCtrl.create({
        title: 'Hola! :)',
        subTitle: 'Evento creado exitosamente',
        buttons: ['OK']
      });
      alert.present();  
      this.nav.push(CalendarioPage);  
      } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
