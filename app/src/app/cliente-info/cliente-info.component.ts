import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ClienteService } from '../cliente.service';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.sass']
})
export class ClienteInfoComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCliente();
  }

  getCliente(): void {
    const codigo = +this.route.snapshot.paramMap.get('id');
    this.clienteService
      .getCliente(codigo)
      .subscribe(cliente => (this.cliente = cliente));
  }

  goBack() {
    this.location.back();
  }
}
