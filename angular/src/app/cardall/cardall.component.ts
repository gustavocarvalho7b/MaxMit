import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../Models/aluno.model';

@Component({
  selector: 'app-cardall',
  templateUrl: './cardall.component.html',
  styleUrls: ['./cardall.component.scss'],
})
export class CardallComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Aluno[]>('http://localhost:3000/alunos').subscribe({
      next: (data) => {
        this.alunos = data;
      },
      error: (err) => {
        console.error('Erro ao carregar alunos:', err);
      },
    });
  }

  calcularIdade(dataNascimento?: string | Date | null): number | null {
    if (!dataNascimento) {
      return null;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }
}
