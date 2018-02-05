import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeCoordinadorPage } from '../home-coordinador/home-coordinador';
import { HomeDocentePage } from '../home-docente/home-docente';
import { HomeEstudiantePage } from '../home-estudiante/home-estudiante';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { AgServices } from '../../services/agacademic.service';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
 

  tab1Root: any = HomeEstudiantePage;
  tab2Root: any = SettingsPage;


  ngOnInit() {
    if (this.agServices.getRol() === "") {
      this.tab1Root = HomeEstudiantePage;
    }
    if (this.agServices.getRol() === "coordinador") {
      this.tab1Root = HomeCoordinadorPage;
    }
    if (this.agServices.getRol() === "docente") {
      this.tab1Root = HomeDocentePage;
    }
    if (this.agServices.getRol() === "estudiante") {
      this.tab1Root = HomeEstudiantePage;
    }

  }

  constructor(public navCtrl: NavController, public agServices: AgServices) {
  }
  
}
