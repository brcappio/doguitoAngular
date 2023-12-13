import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'Novo Produto',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['produtos-cadastro']
          },
          {
            label: 'Lista de Produtos',
            icon: 'pi pi-fw pi-list',
            routerLink: ['produtos-lista']
          },
        ],
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Novo Cliente',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['clientes-cadastro']
          },
          {
            label: 'Lista de Clientes',
            icon: 'pi pi-fw pi-list',
            routerLink: ['clientes-lista']
          },
        ],
      },
      {
        label: 'Pets',
        icon: 'pi pi-fw pi-twitter',
        items: [
          {
            label: 'Novo Pet',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['pets-cadastro']
          },
          {
            label: 'Lista de Pets',
            icon: 'pi pi-fw pi-list',
            routerLink: ['pets-lista']
          },
        ],
      },
    ];
  }
}
