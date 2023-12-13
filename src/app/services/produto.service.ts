import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private baseUrl: string = 'http://localhost:3000/produtos';
    
  constructor(private http: HttpClient) { }
  
  postProduto(registerObj: Produto) {
    return this.http.post(`${this.baseUrl}`, registerObj)
  }

  updateProduto(registerObj: Produto, id: number) {
    return this.http.put(`${this.baseUrl}`, registerObj)
  }

  getProduto():Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}`);
  }

  deleteProduto(id:number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
