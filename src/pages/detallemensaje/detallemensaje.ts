import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgServices } from '../../services/agacademic.service';
/**
 * Generated class for the DetallemensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallemensaje',
  templateUrl: 'detallemensaje.html',
})
export class DetallemensajePage {

  asunto = null;
  mensaje:any = {asunto:"", mensaje:""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private agServices: AgServices,) {

  /****************   Obtener Asunto Mensaje ******************/
  this.asunto = navParams.get('asunto');
  //Obtiene asunto del msj, se crea instancia de navParams para poder usarlo
  /****************   Obtener Asunto Mensaje ******************/
    if(this.asunto != null){      
      this.mensaje = agServices.getMensaje(this.asunto).subscribe((mensaje)=>{this.mensaje=mensaje})
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallemensajePage');
  }

}
