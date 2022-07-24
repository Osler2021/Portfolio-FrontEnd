import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getHabilidades(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(`${this.apiServeUrl}/habilidad/ver`);
  }

  public addHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(`${this.apiServeUrl}/habilidad/new`,habilidad);
  }

  public updateHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(`${this.apiServeUrl}/habilidad/actualizar`,habilidad);
  }

  public deleteHabilidad(habilidadId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/habilidad/delete/${habilidadId}`);
  }
}