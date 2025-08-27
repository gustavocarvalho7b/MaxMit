import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Models/aluno.model';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-cardall',
  templateUrl: './cardall.component.html',
  styleUrls: ['./cardall.component.scss'], // 👈 detalhe: aqui é `styleUrls` no plural
})
export class CardallComponent {
  alunos: Aluno[] = [];
}
