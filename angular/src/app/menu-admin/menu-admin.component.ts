import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss',
})
export class MenuAdminComponent {
  @Input() visivel: boolean = false;
  @Output() fechar = new EventEmitter<void>();
  private podeFechar = false;

  ngOnChanges() {
    if (this.visivel) {
      setTimeout(() => {
        this.podeFechar = true;
      }, 100);
    } else {
      this.podeFechar = false;
    }
  }

  fecharMenu() {
    this.fechar.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.visivel && this.podeFechar && !target.closest('.menu-container')) {
      this.fecharMenu();
    }
  }
}
