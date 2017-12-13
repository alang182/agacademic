import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { RecordarPasswordPage } from '../recordar-password/recordar-password';
import { HomeCoordinadorPage } from '../home-coordinador/home-coordinador';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})



export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goTo(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToRecordarPassword(params){
    if (!params) params = {};
    this.navCtrl.push(RecordarPasswordPage);
  }goToHomeCoordinador(params){
    if (!params) params = {};
    this.navCtrl.push(HomeCoordinadorPage);
  }goToCrearGrupo(params){
    if (!params) params = {};
    this.navCtrl.push(CrearGrupoPage);
  }

 
  
  


}
