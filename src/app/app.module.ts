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
import { HomePage } from '../pages/home/home';
import {CalendarioPage} from '../pages/calendario/calendario';
import {HorarioPage} from '../pages/horario/horario';
import {DetallemensajePage} from '../pages/detallemensaje/detallemensaje';
import {EventoPage} from '../pages/evento/evento';
import { Calendar } from '@ionic-native/calendar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Agregados para firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Agregados para firebase
//Agregados al crear el provider auth el cual permite la autenticación usando firebase
import { AuthProvider } from '../providers/auth/auth';
import { AgServices } from '../services/agacademic.service';
import { MensajesPage } from '../pages/mensajes/mensajes';
import { AddUserPage} from '../pages/add-user/add-user';
//Agregados al crear el provider auth el cual permite la autenticación usando firebase
//Llave de acceso para funcionamiento sincronizado con firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBAISU611hdaosZrsdvUvAOfZQ5L0KE-bA",
  authDomain: "agademic-4d15b.firebaseapp.com",
  databaseURL: "https://agademic-4d15b.firebaseio.com",
  storageBucket: "agademic-4d15b.appspot.com",
  messagingSenderId: "1026069680864"
};
//Llave de acceso para funcionamiento sincronizado con firebase

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
    RegisterPage,
    GrupoCoordinadorAdminPage,
    GrupoDocenteUsuarioPage,
    GrupoEstudiantePage,
    GrupoDocenteAdminPage,
    CalendarioPage,
    MensajesPage,
    HorarioPage,
    DetallemensajePage,
    EventoPage,
    AddUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    RegisterPage,
    GrupoCoordinadorAdminPage,
    GrupoDocenteUsuarioPage,
    GrupoEstudiantePage,
    GrupoDocenteAdminPage,
    CalendarioPage,
    MensajesPage,
    HorarioPage,
    DetallemensajePage,
    EventoPage,
    AddUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Calendar,
    AgServices
  ]
})
export class AppModule {}