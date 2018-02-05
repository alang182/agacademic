import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoEstudiantePage } from '../grupo-estudiante/grupo-estudiante';
import { AgServices } from '../../services/agacademic.service';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'page-home-estudiante',
  templateUrl: 'home-estudiante.html'
})
export class HomeEstudiantePage {

  gruposPertenece = [];
  gruposEstudiante = [];
  nombre: string;
  perteneceAgrupo = true;
  noPerteneceAgrupo = false;
  constructor(public navCtrl: NavController, private agServices: AgServices, private nav: NavController) {
  this.agServices.getListadoGruposPerteneceEstudiante().subscribe((gruposPertenece)=>{this.gruposPertenece=gruposPertenece});
  }

 verGrupos(){
    for (let item of this.gruposPertenece) {
      if(this.agServices.getMail() === item.correo ){
        this.nombre = item.nombre;        
        this.agServices.getListadoGruposEstudiante(this.nombre).subscribe((gruposEstudiante)=>{this.gruposEstudiante=gruposEstudiante});
      }   
    }
  }
  /*Se pasa como parametro el nombre del grupo*/
  verDetalle(nombre){
    this.agServices.setNombreGrupoDocente(nombre);
    this.nav.push(GrupoEstudiantePage, {nombre:nombre});
  }
}
