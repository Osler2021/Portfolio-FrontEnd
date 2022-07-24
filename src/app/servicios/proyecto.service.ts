import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServeUrl}/proyectos/ver`);
  }

  public addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServeUrl}/proyectos/new`,proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiServeUrl}/proyectos/actualizar`,proyecto);
  }

  public deleteProyecto(proyectoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/proyectos/delete/${proyectoId}`);
  }
}