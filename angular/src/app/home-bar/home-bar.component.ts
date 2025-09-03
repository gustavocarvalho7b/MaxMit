import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrl: './home-bar.component.scss',
})
export class HomeBarComponent {
  girando = false;
  menuMax: boolean = false;

  menuAdmin() {
    console.log('Abrindo menu');
    this.menuMax = true;
  }

  fecharMenu() {
    this.menuMax = false;
  }

  girarImagem() {
    this.girando = true;
    setTimeout(() => {
      this.girando = false;
    }, 200);
  }
}
