import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // Se configura inicio de la aplicación en página de Login
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private auth: AuthProvider) {
    platform.ready().then(() => {
     this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = TabsControllerPage;
        }
          else{
            this.rootPage = LoginPage;
          }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}