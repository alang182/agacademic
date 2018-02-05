import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';
import { AuthProvider } from '../../providers/auth/auth';
import { HomeCoordinadorPage } from '../home-coordinador/home-coordinador';
import { HomeDocentePage } from '../home-docente/home-docente';
import { HomeEstudiantePage } from '../home-estudiante/home-estudiante';
import { AgServices } from '../../services/agacademic.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  nombre: string;
  gruposPertenece = [];
  user= { email : '', password : ''};
  
  constructor(public navCtrl: NavController, public auth : AuthProvider,private agServices: AgServices,
    public alertCtrl : AlertController) {
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

  /*Método Login propio de firebase, inicialmente para la prueba piloto los usuarios de Coordinador
  y Docente se enceuntran directamente en la base de datos*/

  login() 
  {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {

      this.agServices.setMail(this.user.email);

        if( this.user.email === 'coordinador@coordinador.com'){          
          this.agServices.setRol("coordinador");
          this.navCtrl.push(HomeCoordinadorPage);
        }
        if( this.user.email === 'docente@docente.com'){  
          this.agServices.setRol("docente");
          this.navCtrl.push(HomeDocentePage);
        }
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

}


