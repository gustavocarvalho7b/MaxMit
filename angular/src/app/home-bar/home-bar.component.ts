import { Component } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrl: './home-bar.component.scss',
})
export class HomeBarComponent {
  girando = false;
  menuMax: boolean = false;

  menuAdmin() {
    this.menuMax = !this.menuMax;
  }

    girarImagem() {
    this.girando = true;
    setTimeout(() => {
      this.girando = false;
    }, 200);
  }
}
