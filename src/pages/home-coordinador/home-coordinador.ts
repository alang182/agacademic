import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';
import { GrupoCoordinadorAdminPage } from '../grupo-coordinador-admin/grupo-coordinador-admin';
import { AgServices } from '../../services/agacademic.service';

@Component({
  selector: 'page-home-coordinador',
  templateUrl: 'home-coordinador.html'
})
export class HomeCoordinadorPage {

  grupos=[];
  sinGrupos = false;
  hayGrupos = true;
  constructor(public navCtrl: NavController,private agServices: AgServices,
    private nav: NavController) {
    this.initializeItems();
  }

  goToCrearGrupo(params){
    if (!params) params = {};
    this.navCtrl.push(CrearGrupoPage);
  }

   initializeItems() {
    this.agServices.getListadoGrupos().subscribe((grupos)=>{this.grupos=grupos});
  }

/*Se pasa como parametro el nombre del grupo a ingresar*/
verDetalle(nombre){
  this.agServices.setNombreGrupo(nombre);
  this.nav.push(GrupoCoordinadorAdminPage, {nombre:nombre});
}
}
