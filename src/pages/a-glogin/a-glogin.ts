import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AGestudiantePage } from '../a-gestudiante/a-gestudiante';
import { AGregisterPage } from '../a-gregister/a-gregister';

@Component({
  selector: 'page-a-glogin',
  templateUrl: 'a-glogin.html'
})
export class AGloginPage {

  constructor(public navCtrl: NavController) {
  }
  goToAGestudiante(params){
    if (!params) params = {};
    this.navCtrl.push(AGestudiantePage);
  }
  goToAGregister(params){
    if (!params) params = {};
    this.navCtrl.push(AGregisterPage);
  }


}
