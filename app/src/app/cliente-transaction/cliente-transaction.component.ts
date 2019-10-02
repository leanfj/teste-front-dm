import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../cliente';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cliente-transaction',
  templateUrl: './cliente-transaction.component.html',
  styleUrls: ['./cliente-transaction.component.sass']
})
export class ClienteTransactionComponent implements OnInit {
  title: string = 'Fidelidade';
  cliente: Cliente;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCliente();
  }

  displayedColumns: string[] = [
    'loja',
    'nota',
    'data',
    'dataCadastro',
    'valor',
    'mais'
  ];
  dataSource = [];

  addNota(nomeLoja, numeroNota, dataNota, formaPagamento, valorNota): void {
    this.dataSource.push({
      loja: nomeLoja.value,
      nota: numeroNota.value,
      data: new Date(dataNota.value).toLocaleDateString('pt-BR'),
      dataCadastro: new Date().toLocaleDateString('pt-BR'),
      valor: valorNota.value
    });

    this.table.renderRows();

    nomeLoja.value = '';
    numeroNota.value = '';
    dataNota.value = '';
    formaPagamento.value = '';
    valorNota.value = '';
  }

  getCliente(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService
      .getCliente(id)
      .subscribe(cliente => (this.cliente = cliente));
  }
}
