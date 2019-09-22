import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
