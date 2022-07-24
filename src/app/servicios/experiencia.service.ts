import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServeUrl}/experiencia/ver`);
  }

  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiServeUrl}/experiencia/new`,experiencia);
  }

  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.apiServeUrl}/experiencia/actualizar`,experiencia);
  }

  public deleteExperiencia(experienciaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/experiencia/delete/${experienciaId}`);
  }
}