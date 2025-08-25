import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-cardall',
  templateUrl: './cardall.component.html',
  styleUrl: './cardall.component.scss',
})
export class CardallComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.getAlunos().subscribe({
      next: (data) => (this.alunos = data),
      error: (err) => console.error('Erro ao carregar alunos', err),
    });
  }
}
