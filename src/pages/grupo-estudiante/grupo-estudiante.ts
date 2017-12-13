import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-grupo-estudiante',
  templateUrl: 'grupo-estudiante.html'
})
export class GrupoEstudiantePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
