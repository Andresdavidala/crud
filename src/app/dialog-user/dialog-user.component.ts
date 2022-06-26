import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})

export class DialogUserComponent implements OnInit {
  userForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceUsuer: UsuarioService, private router: Router) {

    
   }
   
   
  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: ['', Validators.required]
    })
  }

  
  agregarUsuario(){
    
    const user: Usuario = {
      cedula: this.userForm.value.cedula,
      nombre: this.userForm.value.nombre,
      apellido: this.userForm.value.apellido,
      direccion: this.userForm.value.direccion,
      edad: this.userForm.value.edad
    }
    // window.location.reload()
    // this._serviceUsuer.agregarUsuario(user)
    // var reload = window.location.reload
    this.router.navigateByUrl("/pag")
    .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))
    
  
    // this._serviceUsuer.agregarUsuario(user)
    
    // this.router.navigate([''])
    
  }
  
  // addUsuario(){
  //   console.log(this.userForm.value)
    
  // }

}
