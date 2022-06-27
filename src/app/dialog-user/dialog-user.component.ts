import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})


export class DialogUserComponent implements OnInit {
  actionBtn:string = "Guardar"
  userForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceUsuer: UsuarioService,
     private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<DialogUserComponent>) {

    
   }
   
   
  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,

  

  ngOnInit(): void {
    
    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: ['', Validators.required]
    })
    

    if(this.editarDatos){
      this.actionBtn = "Actualizar"
      this.userForm.controls['cedula'].setValue(this.editarDatos.cedula),
      this.userForm.controls['nombre'].setValue(this.editarDatos.nombre),
      this.userForm.controls['apellido'].setValue(this.editarDatos.apellido),
      this.userForm.controls['direccion'].setValue(this.editarDatos.direccion),
      this.userForm.controls['edad'].setValue(this.editarDatos.edad)
    }

    
  }

  closeDialog(){
    this.dialogRef.close()
  }
  
  agregarUsuario(){
    if(!this.editarDatos){
      const user: Usuario = {
        cedula: this.userForm.value.cedula,
        nombre: this.userForm.value.nombre,
        apellido: this.userForm.value.apellido,
        direccion: this.userForm.value.direccion,
        edad: this.userForm.value.edad
        
      }
      this.router.navigate(['/em'])
      .then(()=>this.router.navigate([''],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))

    }else{
      const user: Usuario = {
        cedula: this.userForm.value.cedula,
        nombre: this.userForm.value.nombre,
        apellido: this.userForm.value.apellido,
        direccion: this.userForm.value.direccion,
        edad: this.userForm.value.edad
      }
      this.router.navigate(['/em'])
      .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.updateUser(user)}}))
    }
    
    // window.location.reload()
    // this._serviceUsuer.agregarUsuario(user)
    // var reload = window.location.reload

    // this.router.navigate(['/pag'])
    // .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))
    
  
    // this._serviceUsuer.agregarUsuario(user)
    
    // this.router.navigate([''])
    
  }
  
  // addUsuario(){
  //   console.log(this.userForm.value)
    
  // }

}
