import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/interfaces/usuario';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { UsuarioService } from './services/usuario.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listUsuario: Usuario[] = this.usuerService.getUsuario();
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion', 'edad', "modificar"];
  //para llamar al matdialog
  dataSource = new MatTableDataSource(this.listUsuario);
  constructor(private usuerService: UsuarioService, public dialog: MatDialog, router:Router) {}
  openDialog() {
  
    this.dialog.open(DialogUserComponent);
  }
  //↑
  
  // cargaUsuario(){
  //   this.listUsuario = this.usuerService.getUsuario();
  //   this.dataSource = new MatTableDataSource(this.listUsuario);
  // }
  

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //↑ 
}
