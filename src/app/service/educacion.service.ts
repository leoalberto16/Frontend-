import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
   URL= 'http://localhost:8080/educacion/';
  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');

  }

  public details(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  
  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/editar/${id}`, experiencia);
  }
}
