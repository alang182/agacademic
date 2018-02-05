import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { GrupoCoordinadorAdminPage } from '../grupo-coordinador-admin/grupo-coordinador-admin';
import { GrupoDocenteAdminPage } from '../grupo-docente-admin/grupo-docente-admin';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {

  nombre=null;
  mensaje= { asunto : '', contenido:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices,
    private nav: NavController, public alertCtrl: AlertController) {   
  }

  enviarMensaje(){
          if (this.agServices.getRol() === "coordinador") {
            this.agServices.enviarMensajeGrupo(this.mensaje.asunto, this.mensaje.contenido);
            this.mensaje= { asunto : '', contenido:''};            
            let alert = this.alertCtrl.create({
              title: 'Hola! :)',
              subTitle: 'Tu mensaje se ha enviado exitosamente',
              buttons: ['OK']
            });
            alert.present();
            this.nav.push(GrupoCoordinadorAdminPage);
           }

    if (this.agServices.getRol() === "docente") {
      this.agServices.enviarMensajeGrupoDocente(this.mensaje.asunto, this.mensaje.contenido);
          this.mensaje= { asunto : '', contenido:''};
          let alert = this.alertCtrl.create({
            title: 'Hola! :)',
            subTitle: 'Tu mensaje se ha enviado exitosamente',
            buttons: ['OK']
          });
          alert.present();   
          this.nav.push(GrupoDocenteAdminPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajesPage');
  }
}
