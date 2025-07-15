import { Component } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrl: './home-bar.component.scss',
})
export class HomeBarComponent {
  menuMax: boolean = false;
  menuAdmin() {
    this.menuMax = true;
  }
}
