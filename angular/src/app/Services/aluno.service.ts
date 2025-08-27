import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../Models/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos'; // ajuste a URL se necessário

  constructor(private http: HttpClient) {}

  // Buscar todos os alunos
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  // Buscar um aluno pelo ID
  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
  }

  // Criar novo aluno
  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }

  // Atualizar aluno
  updateAluno(id: number, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/${id}`, aluno);
  }

  // Deletar aluno
  deleteAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
