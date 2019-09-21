import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../mock-clientes';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.sass']
})
export class ListaClientesComponent implements OnInit {
  clientes = CLIENTES;

  selectedCliente: Cliente;

  constructor() {}

  ngOnInit() {}

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }
}
