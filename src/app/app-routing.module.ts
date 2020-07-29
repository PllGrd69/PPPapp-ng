import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './web/empresa/empresa.component';
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
  {path:'empresa',component:EmpresaComponent},
  {path:'home',component:HomeComponent},
  {path: '',component:LoginComponent},
  {path: 'administrador',component:AdministradorComponent, canActivate:[AuthGuard]},
  {path: 'perfiladmin', component:PerfilComponent},
  {path: 'perfilva', component:PerfilvaComponent},
  {path: 'regca', component:RegcaComponent},
  {path: 'evaluacion', component:EvaluacionComponent},
  {path: 'estudiante/home',component:EstudianteComponent},
  {path: 'estudiante/solicitudcp',component:SolicitudcpComponent},
  {path: 'estudiante/perfil',component:EstudianteperfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
