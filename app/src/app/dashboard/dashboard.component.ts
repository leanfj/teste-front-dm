import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  clientes$: Observable<Cliente[]>;
  private searchTerms = new Subject<string>();

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    // this.getClientes();

    this.clientes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.clienteService.searchCliente(term))
    );
  }

  // clientes: Cliente[];

  // getClientes(): void {
  //   this.clienteService
  //     .getClientes()
  //     .subscribe(clientes => (this.clientes = clientes));
  // }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
