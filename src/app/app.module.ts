import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AdminComponent } from './componentes/admin/admin.component';

import { interceptorProvider } from './servicios/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      animateTitle: false,
      animationDuration: 1000,
      clockwise: false,
      responsive: true,
      lazy: true,
    }),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
