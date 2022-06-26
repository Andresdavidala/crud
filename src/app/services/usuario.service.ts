import { Injectable } from '@angular/core';
import { Usuario } from 'src/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  ELEMENT_DATA: Usuario[] = [
    {cedula: 351216, nombre: 'Guiller Rafael', apellido: "Correa Lasso", direccion: 'Av. Belgica Guayaquil', edad:32},
    {cedula: 351216, nombre: 'Juan Rafael', apellido: "Correa Lasso", direccion: 'Av. Belgica Guayaquil', edad:32},
    {cedula: 351216, nombre: 'Pedro Rafael', apellido: "Correa Lasso", direccion: 'Av. Belgica Guayaquil', edad:32},
    {cedula: 351216, nombre: 'Richard Rafael', apellido: "Correa Lasso", direccion: 'Av. Belgica Guayaquil', edad:32},
    {cedula: 12121212, nombre: 'Juan Albert', apellido: "Correa Lasso", direccion: 'Av. Belgica Guayaquil', edad:32},
   
  ];  
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: Usuario){
    this.ELEMENT_DATA.unshift(usuario) 
  }

  updateUser(data: any){
    this.ELEMENT_DATA.push(data)
  }
}
