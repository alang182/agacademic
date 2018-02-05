import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { GrupoDocenteAdminPage } from '../grupo-docente-admin/grupo-docente-admin';
import { GrupoDocenteUsuarioPage } from '../grupo-docente-usuario/grupo-docente-usuario';
import { AgServices } from '../../services/agacademic.service';

@Component({
  selector: 'page-home-docente',
  templateUrl: 'home-docente.html'
})
export class HomeDocentePage {
  gruposPertenece = [];
  gruposCreados: any =[];
  noPerteneceAgrupo = false;
  perteneceAgrupo = true;
  sinGruposCreados = false;
  conGruposCreados = true;
 
  constructor(public navCtrl: NavController, private agServices: AgServices,private nav: NavController) {
    this.initializeGruposPertenece();
    this.initializeGruposCreados();
  }

  /* LLama grupo(s) creados por Coordinador */
  initializeGruposPertenece() {  
    this.agServices.getListadoGrupos().subscribe((gruposPertenece)=>{this.gruposPertenece=gruposPertenece});
  }
  /* LLama grupo(s) creados por Coordinador */

  /* LLama grupo(s) creados por Docente */
  initializeGruposCreados() {
    this.agServices.getListadoGruposCreados().subscribe((gruposCreados)=>{this.gruposCreados=gruposCreados});
  }
  /* LLama grupo(s) creados por Docente */

  goToCrearGrupo(params){
    if (!params) params = {};
    this.navCtrl.push(CrearGrupoPage);
  }

  /*Se pasa como parametro el nombre del grupo*/
  verDetalle(nombre){  
    this.agServices.setNombreGrupo(nombre);
    this.nav.push(GrupoDocenteUsuarioPage, {nombre:nombre});
  }

  seleccionarGrupoCreado(nombre){
    this.agServices.setNombreGrupoDocente(nombre);  
    this.agServices.setNombreGrupo(nombre);  
    this.navCtrl.push(GrupoDocenteAdminPage, {nombre:nombre});
  }


}
