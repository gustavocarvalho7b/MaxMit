import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cadastro } from '../Models/cadastro.model';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrl: './modal-cadastro.component.scss',
})
export class ModalCadastroComponent {
  @Input() cadastros: cadastro[] = [];
  @Output() fechar = new EventEmitter<void>();
}
