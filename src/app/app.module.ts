import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AGloginPage } from '../pages/a-glogin/a-glogin';
import { AGregisterPage } from '../pages/a-gregister/a-gregister';
import { AGcoordinadorPage } from '../pages/a-gcoordinador/a-gcoordinador';
import { AGdocentePage } from '../pages/a-gdocente/a-gdocente';
import { AGestudiantePage } from '../pages/a-gestudiante/a-gestudiante';
import { AGadmingroupCPage } from '../pages/a-gadmingroup-c/a-gadmingroup-c';
import { AGadmingroupDPage } from '../pages/a-gadmingroup-d/a-gadmingroup-d';
import { AGgroupDPage } from '../pages/a-ggroup-d/a-ggroup-d';
import { AGgroupEPage } from '../pages/a-ggroup-e/a-ggroup-e';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AGloginPage,
    AGregisterPage,
    AGcoordinadorPage,
    AGdocentePage,
    AGestudiantePage,
    AGadmingroupCPage,
    AGadmingroupDPage,
    AGgroupDPage,
    AGgroupEPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AGloginPage,
    AGregisterPage,
    AGcoordinadorPage,
    AGdocentePage,
    AGestudiantePage,
    AGadmingroupCPage,
    AGadmingroupDPage,
    AGgroupDPage,
    AGgroupEPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}