import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AgServices } from '../../services/agacademic.service';
import { HomeCoordinadorPage } from '../home-coordinador/home-coordinador';
import { HomeDocentePage } from '../home-docente/home-docente';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-crear-grupo',
  templateUrl: 'crear-grupo.html'
})
export class CrearGrupoPage {

groups= { name : ''};
constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, private agServices: AgServices,
    private nav: NavController, public alertCtrl: AlertController) {
  }

/*Se crea agrupo, acorde al rol del usuario se llama el método respectivo para
guardar este en la base de datos en firebase*/
crearGrupo(){
  if (this.agServices.getRol() === "coordinador") {
          this.agServices.crearGrupo(this.groups.name);
      this.groups= { name : ''};

      let alert = this.alertCtrl.create({
        title: 'Hola! :)',
        subTitle: 'Tu grupo se ha creado exitosamente',
        buttons: ['OK']
      });
      alert.present();
      this.nav.push(HomeCoordinadorPage);
  }

  if (this.agServices.getRol() === "docente") {
    this.agServices.crearGrupoDocentes(this.groups.name);
    this.groups= { name : ''};    
    
    let alert = this.alertCtrl.create({
      title: 'Hola! :)',
      subTitle: 'Tu grupo se ha creado exitosamente',
      buttons: ['OK']
    });
    alert.present();
    this.nav.push(HomeDocentePage);
  }
}

}
