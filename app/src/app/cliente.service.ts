import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
