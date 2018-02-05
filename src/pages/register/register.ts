import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  
  user= { email : '', password : '', name : '', programa: '', movil: ''};
  constructor(public navCtrl: NavController, public auth : AuthProvider,
    public alertCtrl : AlertController, public afDB: AngularFireDatabase,  private nav: NavController) {/*porq public*/
  }

  signin(){
    /*Escribe en BD Información del Usuario*/
    this.afDB.database.ref('informacionUsuario/' + this.user.name).set({
      correo: this.user.email, 
      programa: this.user.programa, 
      movil: this.user.movil,
      rol: '',
      nombre: this.user.name,
    });
    this.afDB.database.ref('usuarios/' + this.user.name).set({
      nombre: this.user.name,       
    });
  /*Método de Registro propio de firebase*/
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      this.nav.push(LoginPage);
      // El usuario se ha creado correctamente
      let alert = this.alertCtrl.create({
        title: '¡Perfecto!',
        subTitle: 'Tu usuario ha sido creado exitosamente',
        buttons: ['Aceptar']
      });
      alert.present();
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Datos incorrectos',
        buttons: ['Aceptar']
      });
      alert.present();
    })

    this.auth.logout();
  }
  
}
