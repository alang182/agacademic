import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  horario = {enlace:''};
  hayHorario= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices,public alertCtrl: AlertController) {
  }

  guardarEnlace(this,horario,enlace){
   this.agServices.setUrlHorario(this.horario.enlace);
   horario = {enlace:''};
    this.hayHorario=true;     
      let alert = this.alertCtrl.create({
        title: 'Hola! :)',
        subTitle: 'Horario cargado exitosamente',
        buttons: ['OK']
      });
      alert.present();
  }
  abrirEnlace() {
    window.open(this.horario.enlace,'_system','location=yes');
    };
  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }
}
