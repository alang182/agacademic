import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeCoordinadorPage } from '../home-coordinador/home-coordinador';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeCoordinadorPage;
  tab2Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  goToHomeCoordinador(params){
    if (!params) params = {};
    this.navCtrl.push(HomeCoordinadorPage);
  }goToSettingsPage(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }
}
