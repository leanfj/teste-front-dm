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

  getClientes(): void {
    this.clienteService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }
}
