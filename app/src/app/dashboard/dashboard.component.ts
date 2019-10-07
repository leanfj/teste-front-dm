import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.getClientes();
  }

  clientes: Cliente[];
  filtro: string = '';

  getClientes(): void {
    this.clienteService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }

  filtrarCliente() {
    if (this.filtro === undefined || this.filtro.trim() === '') {
      return this.clientes;
    }

    const toCompare = this.filtro.toLowerCase();

    function checkInside(item: any, term: string) {
      for (let property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (
          item[property]
            .toString()
            .toLowerCase()
            .includes(toCompare)
        ) {
          return true;
        }
      }
      return false;
    }

    return this.clientes.filter((item: any) => {
      return checkInside(item, this.filtro.toLowerCase());
    });
  }
}
