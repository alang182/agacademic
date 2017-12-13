import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';

@Component({
  selector: 'page-home-docente',
  templateUrl: 'home-docente.html'
})
export class HomeDocentePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCrearGrupo(params){
    if (!params) params = {};
    this.navCtrl.push(CrearGrupoPage);
  }
}
