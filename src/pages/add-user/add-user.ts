import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
import { AlertController } from 'ionic-angular';
import { GrupoDocenteAdminPage } from '../grupo-docente-admin/grupo-docente-admin';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  listadoEstudiantes = true;
  estudiantes=[];
  grupo:any = {nombre:""};   

  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices, public alertCtrl: AlertController) {
  this.grupo.nombre = this.agServices.getNombreGrupoDocente();
  /* Se obtiene listado de usuarios inscritos en el aplicativo con el fin de seleccionarlos
  e incluirlos a el grupo*/
  agServices.getListadoEstudiantes().subscribe((estudiantes)=>{this.estudiantes=estudiantes});
  }

  addUser(nombre){
    /*Se crea método que agregue estudiante a grupo*/ 
    this.agServices.addUserGrupoDocentes(nombre, this.grupo.nombre);
    /*Se crea método que agrege grupo a información estudiante, lo cual permitirá mostrar el grupo
    en el home del estudiante cuando este ingrese al aplicativo*/ 
    this.agServices.addGrupoInformacionUsuario(nombre);    
  }

  addUserOk(){
    let alert = this.alertCtrl.create({
      title: 'Hola! :)',
      subTitle: 'Estudiantes agregados exitosamente',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(GrupoDocenteAdminPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }
}
