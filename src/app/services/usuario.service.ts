import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl: string = `${environment.url}/usuarios`;

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  postUsuario(registerObj: Usuario) {
    return this.http.post(`${this.baseUrl}`, registerObj);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
