import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { EmptyComponent } from './empty/empty.component';
import { GuardarUsuarioComponent } from './guardar-usuario/guardar-usuario.component';

const routes: Routes = [
  {path:'pag',component:DialogUserComponent},
  {path:'', component:GuardarUsuarioComponent},
  {path:'em',component:EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
