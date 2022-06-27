import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from 'src/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 

  ELEMENT_DATA: Usuario[] = [
    {cedula: 351216, nombre: 'Guiller Rafael', apellido: "Correa Lasso", direccion: 'Av. Ecuador entre Bco.Guayaquil y Belgica', edad:32},
    {cedula: 351216, nombre: 'Ernesto Rafael', apellido: "Suarez Ramirez", direccion: 'Alborada', edad:22},
    {cedula: 351216, nombre: 'Vanessa Maria', apellido: "Ramirez Ugarte", direccion: '9 de Octubre', edad:45},
    
   
  ];  
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: Usuario){
    this.ELEMENT_DATA.unshift(usuario) 
  }

  updateUser(data: Usuario){
    var cedula = this.ELEMENT_DATA.find(user => user.cedula == data.cedula)
    if(data.cedula == cedula?.cedula){
      var index  = this.ELEMENT_DATA.findIndex(user => user.cedula == data.cedula)
      this.ELEMENT_DATA[index] = data
    }
    // return this.ELEMENT_DATA.fill(data)
  }
}
