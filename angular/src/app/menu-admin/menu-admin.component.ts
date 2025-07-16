import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss',
})
export class MenuAdminComponent {
  @Input() visivel: boolean = false;
}
