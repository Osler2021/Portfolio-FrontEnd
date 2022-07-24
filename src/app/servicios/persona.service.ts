import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiServeUrl}/personas/ver`);
  }

  public addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServeUrl}/personas/new`, persona);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServeUrl}/personas/actualizar`,persona);
  }

  public deletePersona(personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/personas/delete/${personaId}`);
  }
}