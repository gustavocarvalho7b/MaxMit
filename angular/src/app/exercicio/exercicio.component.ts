import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../Services/exercicio.service';
import { ExerciciosService } from '../Services/exercicio.service';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrl: './exercicio.component.scss',
})
export class ExerciciosComponent implements OnInit {
  exercicios: Exercicio[] = [];
  exercicioSelecionado: Exercicio | null = null;

  constructor(private exerciciosService: ExerciciosService) {}

  ngOnInit(): void {
    this.carregarExercicios();
  }

  carregarExercicios() {
    this.exerciciosService.getAll().subscribe({
      next: (res) => {
        console.log('Recebido do backend:', res); // ✅ debug
        this.exercicios = Array.isArray(res) ? res : [res];
      },
      error: (err) => console.error('Erro ao carregar exercícios:', err),
    });
  }

  abrirModal(exercicio: Exercicio) {
    this.exercicioSelecionado = exercicio;
  }

  fecharModal() {
    this.exercicioSelecionado = null;
  }
}
