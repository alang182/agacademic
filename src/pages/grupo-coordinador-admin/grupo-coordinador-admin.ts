import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-grupo-coordinador-admin',
  templateUrl: 'grupo-coordinador-admin.html'
})
export class GrupoCoordinadorAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
