import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RecordarPasswordPage } from '../recordar-password/recordar-password';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToRecordarPassword(params){
    if (!params) params = {};
    this.navCtrl.push(RecordarPasswordPage);
  }goToApp(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }

  //Permite ocultar tabs en la página
  // ngAfterViewInit() {
  //   let tabs = document.querySelectorAll('.show-tabbar');
  //   if (tabs !== null) {
  //       Object.keys(tabs).map((key) => {
  //           tabs[key].style.display = 'none';
  //       });
  //   }
    
  // }

  // ionViewWillLeave() {
  //   let tabs = document.querySelectorAll('.show-tabbar');
  //   if (tabs !== null) {
  //       Object.keys(tabs).map((key) => {
  //           tabs[key].style.display = 'flex';
  //       });

  //   }
// }

  

}


