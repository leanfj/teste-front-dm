import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private messageService: MessageService) {}

  getClientes(): Observable<Cliente[]> {
    this.messageService.add('MessageService: Lista de clientes Carregada');
    return of(CLIENTES);
  }

  getCliente(id: number): Observable<Cliente> {
    return of(CLIENTES.find(cliente => cliente.codigo === id));
  }
}
