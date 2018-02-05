import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class AgServices{
    private rol:string;
    private mail:string;
    private estudiante:string;
    private nombreGrupo:string;
    private nombreGrupoDocente:string;
    private asuntoMensaje:string;

    public setRol(rol:string) {
        this.rol = rol;
    }
    public getRol() {
        return this.rol;
    }
    public setMail(mail:string) {
        this.mail = mail;
    }
    public getMail() {
        return this.mail;
    }
    public setNombreEstudiante(estudiante:string) {
        this.estudiante = estudiante;
    }
    public getNombreEstudiante() {
        return this.estudiante;
    }
    public setNombreGrupo(nombreGrupo:string) {
        this.nombreGrupo = nombreGrupo;
    }
    public getNombreGrupo() {
       return this.nombreGrupo;
    }
    public setNombreGrupoDocente(nombreGrupoDocente:string) {
        this.nombreGrupoDocente = nombreGrupoDocente;
    }
    public getNombreGrupoDocente() {
        return this.nombreGrupoDocente;
    }
    public setAsuntoMensaje(asuntoMensaje:string) {
        this.asuntoMensaje = asuntoMensaje;
    }
    constructor(private afDB: AngularFireDatabase){

    }


    /****************   Obtener Listado de Estudiantes ******************/

    public getListadoEstudiantes(){
        return this.afDB.list('usuarios/').valueChanges();
    }

    /****************   Obtener Listado de Estudiantes ******************/

    /****************   Obtener Información de Usuario ******************/
    public getInformacionUsuario(nombre){
        return this.afDB.object('informacionUsuario/' + nombre).valueChanges();
    }
    /****************   Obtener Información de Usuario ******************/

     /****************   Obtener Listado de Grupos ******************/

    public getListadoGrupos(){
        return this.afDB.list('gruposCoordinacion/').valueChanges();
    }

    /****************   Obtener Listado de Grupos ******************/

    /****************   Obtener Listado de Grupos Creados por Docente ******************/
    public getListadoGruposCreados(){
        return this.afDB.list('gruposDocencia/').valueChanges();
    }
    /****************   Obtener Listado de Grupos Creados por Docente ******************/

     /****************   Obtener Grupo con base a su nombre ******************/
     public getGrupo(nombre){
        // return this.notas.filter( (nota) => {return nota.id == id } ) [0];
        return this.afDB.object('gruposCoordinacion/'+nombre).valueChanges();
    }
    /****************   Obtener Grupo con base a su nombre ******************/

    /****************   Obtener GrupoDocente con base a su nombre ******************/
    public getGrupoDocencia(nombre){       
        return this.afDB.object('gruposDocencia/'+nombre).valueChanges();
    }
    /****************   Obtener GrupoDocente con base a su nombre ******************/

    /****************   Obtener Grupo con base a su nombre ******************/
     public getMensaje(asunto){
        return this.afDB.object('mensajes/' + this.nombreGrupo +'/'+asunto).valueChanges();
    }
    /****************   Obtener Grupo con base a su nombre ******************/

    /****************   Crear Grupo ******************/
    public crearGrupo(nombre){
        this.afDB.database.ref('gruposCoordinacion/' + nombre).set({nombre: nombre});
    }
    /****************   Crear Grupo ******************/

    /****************   Crear Grupo Adminitrado por Docentes ******************/ 
     public crearGrupoDocentes(nombre){

        this.afDB.database.ref('gruposDocencia/' + nombre).set({nombre: nombre});

    }
    /****************   Crear Grupo Adminitrado por Docentes ******************/ 

     /****************   Agregar Estudiantes a Grupo ******************/
     public addUserGrupoDocentes(nombre, nombreGrupo){

        this.afDB.database.ref('gruposDocencia/' + nombreGrupo + '/miembros/' + nombre).set({nombre: nombre});

    }
    /****************   Agregar Estudiantes a Grupo ******************/

    /****************  Guardar Mensajes de un Grupo ******************/
      public enviarMensajeGrupo(asunto, mensaje){          
       this.afDB.database.ref('mensajes/' + this.nombreGrupo + '/' + asunto).set({asunto: asunto, mensaje:mensaje});   
    }
    /****************  Guardar Mensajes de un Grupo ******************/

    /****************  Guardar Mensajes de un Grupo Docente ******************/
    public enviarMensajeGrupoDocente(asunto, mensaje){
        this.afDB.database.ref('mensajes/' + this.nombreGrupoDocente + '/' + asunto).set({asunto: asunto, mensaje:mensaje});   
    } 
     /****************  Guardar Mensajes de un Grupo Docente ******************/

     /****************   Obtener Listado de Mensajes ******************/
     public getListadoMensajes(){
        return this.afDB.list('mensajes/' + this.nombreGrupo).valueChanges();
    }
    /****************   Obtener Listado de Mensajes ******************/

    /****************   Obtener Listado de Mensajes Grupo Adminitrado por Docente ******************/
    public getListadoMensajesDocente(){
        return this.afDB.list('mensajes/' + this.nombreGrupoDocente).valueChanges();
    }
    /****************   Obtener Listado de Mensajes Grupo Adminitrado por Docente ******************/

    /****************   Guardar URL Horario ******************/
     public setUrlHorario(enlace){
        this.afDB.database.ref('horarios/' + this.nombreGrupo).set({enlaceHorario: enlace}); 
    }
    /****************   Guardar URL Horario ******************/

    /****************   Obtener URL de Horario ******************/
    public getUrlHorario(nombreGrupo){
        return this.afDB.object('horarios/' + this.nombreGrupo).valueChanges();
    }
    /****************   Obtener URL de Horario ******************/

    /****************  Guardar Evento de un Grupo ******************/
    public setEventoGrupo(mes, asunto, fecha, horaInicio, horaFin){          
       this.afDB.database.ref('eventos/' + this.nombreGrupo + '/' + mes + '/' + asunto).set({asunto: asunto, fecha:fecha, horaInicio: horaInicio, horaFin:horaFin});   
    }
    /****************  Guardar Evento de un Grupo ******************/

    /****************  Guardar Evento de un Grupo Docente ******************/
    public setEventoGrupoDocente(mes, asunto, fecha, horaInicio, horaFin){          
        this.afDB.database.ref('eventos/' + this.nombreGrupoDocente + '/' + mes + '/' + asunto).set({asunto: asunto, fecha:fecha, horaInicio: horaInicio, horaFin:horaFin});   
     }
    /****************  Guardar Evento de un Grupo Docente ******************/

    /****************   Obtener Listado Eventos ******************/
     public getListadoEventos(mes){
        return this.afDB.list('eventos/' + this.nombreGrupo + '/' + mes).valueChanges();
    }
    /****************   Obtener Listado Eventos ******************/
   
    /****************  Agregar Grupo a perfil de Usuario ******************/
    public addGrupoInformacionUsuario(nombre){ 
        this.afDB.database.ref('informacionUsuario/' + nombre + '/grupos/'+ this.nombreGrupoDocente).set({nombre: this.nombreGrupoDocente});   
    }
    /****************  Agregar Grupo a perfil de Usuario ******************/

    /****************  Obtener listado de usuarios ******************/
     public getListadoGruposPerteneceEstudiante(){
        return this.afDB.list('informacionUsuario/' ).valueChanges();
     }
    /****************  Obtener listado de usuarios ******************/

    /****************  Obtener Listado de Grupos a los cuales pertenece el estudiante ******************/
     public getListadoGruposEstudiante(nombre){
        return this.afDB.list('informacionUsuario/' + nombre +  '/grupos' ).valueChanges();
    }
    /****************  Obtener Listado de Grupos a los cuales pertenece el estudiante ******************/
}