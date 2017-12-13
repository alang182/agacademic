import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';

@Component({
  selector: 'page-home-coordinador',
  templateUrl: 'home-coordinador.html'
})
export class HomeCoordinadorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCrearGrupo(params){
    if (!params) params = {};
    this.navCtrl.push(CrearGrupoPage);
  }
  
  
}
