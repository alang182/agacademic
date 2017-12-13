import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-grupo-docente-usuario',
  templateUrl: 'grupo-docente-usuario.html'
})
export class GrupoDocenteUsuarioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
