import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.sass']
})
export class ListaClientesComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.getClientes();
  }

  clientes: Cliente[];

  @Output() clienteSelecionado = new EventEmitter();

  onSelect(cliente: any): void {
    this.clienteSelecionado.emit(cliente);
  }

  getClientes(): void {
    this.clienteService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }
}
