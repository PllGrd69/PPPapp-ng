import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guards/auth.guard';
import { PerfilComponent } from './web/administrador/perfil/perfil.component';
import { PerfilvaComponent } from './web/administrador/perfilva/perfilva.component';
import { RegcaComponent } from './web/administrador/regca/regca.component';
import { EvaluacionComponent } from './web/administrador/evaluacion/evaluacion.component';
import { EstudianteComponent } from './web/estudiante/estudiante.component';
import { SolicitudcpComponent } from './web/estudiante/solicitudcp/solicitudcp.component';
import { EstudianteperfilComponent } from './web/estudiante/estudianteperfil/estudianteperfil.component';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'administrador',component:AdministradorComponent, canActivate:[AuthGuard]},
  {path: 'perfiladmin', component:PerfilComponent, canActivate:[AuthGuard]},
  {path: 'perfilva', component:PerfilvaComponent, canActivate:[AuthGuard]},
  {path: 'regca', component:RegcaComponent, canActivate:[AuthGuard]},
  {path: 'evaluacion', component:EvaluacionComponent, canActivate:[AuthGuard]},
  {path: 'estudiante/home',component:EstudianteComponent, canActivate:[AuthGuard]},
  {path: 'estudiante/solicitudcp',component:SolicitudcpComponent, canActivate:[AuthGuard]},
  {path: 'estudiante/perfil',component:EstudianteperfilComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
