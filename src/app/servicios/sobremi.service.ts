import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root',
})
export class SobremiService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSobremis(): Observable<Sobremi[]> {
    return this.http.get<Sobremi[]>(`${this.apiServeUrl}/sobremi/ver`);
  }

  public addSobremi(sobremi: Sobremi): Observable<Sobremi> {
    return this.http.post<Sobremi>(`${this.apiServeUrl}/sobremi/new`, sobremi);
  }

  public updateSobremi(sobremi: Sobremi): Observable<Sobremi> {
    return this.http.put<Sobremi>(`${this.apiServeUrl}/sobremi/actualizar`,sobremi);
  }

  public deleteSobremi(sobremiId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeUrl}/sobremi/delete/${sobremiId}`);
  }
}