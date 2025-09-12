import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Exercicio {
  id?: number;
  titulo: string;
  descricao: string;
  link_video?: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciciosService {
  private apiUrl = 'http://localhost:3000/exercicios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Exercicio[]> {
    return this.http.get<Exercicio[]>(this.apiUrl);
  }

  getById(id: number): Observable<Exercicio> {
    return this.http.get<Exercicio>(`${this.apiUrl}/${id}`);
  }

  create(exercicio: Exercicio): Observable<Exercicio> {
    return this.http.post<Exercicio>(this.apiUrl, { exercicio });
  }

  update(id: number, exercicio: Exercicio): Observable<Exercicio> {
    return this.http.put<Exercicio>(`${this.apiUrl}/${id}`, { exercicio });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
