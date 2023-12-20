import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private baseUrl: string = `${environment.url}/pets`;

  constructor(private http: HttpClient) {}

  postPet(registerObj: Pet) {
    return this.http.post(`${this.baseUrl}`, registerObj);
  }

  updatePet(registerObj: Pet, id: number) {
    return this.http.put(`${this.baseUrl}`, registerObj);
  }

  getPet(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}`);
  }

  deletePet(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
