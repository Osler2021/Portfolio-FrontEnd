import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthService } from './servicios/auth.service';
import { AdminComponent } from './componentes/admin/admin.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'encabezado', component: EncabezadoComponent },
  { path: 'sobreMi', component: SobreMiComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminComponent },
  { path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule {}
