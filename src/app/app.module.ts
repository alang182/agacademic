import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomeEstudiantePage } from '../pages/home-estudiante/home-estudiante';
import { HomeDocentePage } from '../pages/home-docente/home-docente';
import { HomeCoordinadorPage } from '../pages/home-coordinador/home-coordinador';
import { CrearGrupoPage } from '../pages/crear-grupo/crear-grupo';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { RecordarPasswordPage } from '../pages/recordar-password/recordar-password';
import { RegisterPage } from '../pages/register/register';
import { GrupoCoordinadorAdminPage } from '../pages/grupo-coordinador-admin/grupo-coordinador-admin';
import { GrupoDocenteUsuarioPage } from '../pages/grupo-docente-usuario/grupo-docente-usuario';
import { GrupoEstudiantePage } from '../pages/grupo-estudiante/grupo-estudiante';
import { GrupoDocenteAdminPage } from '../pages/grupo-docente-admin/grupo-docente-admin';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomeEstudiantePage,
    HomeDocentePage,
    HomeCoordinadorPage,
    CrearGrupoPage,
    SettingsPage,
    TabsControllerPage,
    LoginPage,
    RecordarPasswordPage,
    RegisterPage,
    GrupoCoordinadorAdminPage,
    GrupoDocenteUsuarioPage,
    GrupoEstudiantePage,
    GrupoDocenteAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeEstudiantePage,
    HomeDocentePage,
    HomeCoordinadorPage,
    CrearGrupoPage,
    SettingsPage,
    TabsControllerPage,
    LoginPage,
    RecordarPasswordPage,
    RegisterPage,
    GrupoCoordinadorAdminPage,
    GrupoDocenteUsuarioPage,
    GrupoEstudiantePage,
    GrupoDocenteAdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}