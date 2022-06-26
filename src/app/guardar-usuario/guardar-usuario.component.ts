import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/interfaces/usuario';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-guardar-usuario',
  templateUrl: './guardar-usuario.component.html',
  styleUrls: ['./guardar-usuario.component.css']
})
export class GuardarUsuarioComponent implements OnInit {

  listUsuario: Usuario[] = []
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion', 'edad', "modificar"];
  //para llamar al matdialog
  dataSource = new MatTableDataSource<any>;
  constructor(private usuerService: UsuarioService, public dialog: MatDialog, router:Router) {}
  openDialog() {
  
    this.dialog.open(DialogUserComponent);
  }

  ngOnInit(): void {
    this.listUsuario = this.usuerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }
  //↑
  
  // cargaUsuario(){
  //   this.listUsuario = this.usuerService.getUsuario();
  //   this.dataSource = new MatTableDataSource(this.listUsuario);
  // }
  editUsuario(element: any){
    this.dialog.open(DialogUserComponent,{
      data:element 
    
    })
     
  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  

}
