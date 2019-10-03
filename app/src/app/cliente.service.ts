import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cliente } from './cliente';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private clientesUrl = 'api/clientes';

  private log(message: string) {
    this.messageService.add(`ClienteService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.body.error}`);

      return of(result as T);
    };
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl).pipe(
      tap(_ => this.log('Lista de clientes carregada')),
      catchError(this.handleError<Cliente[]>('getClientes', []))
    );
  }

  getCliente(codigo: number): Observable<Cliente> {
    const url = `${this.clientesUrl}/${codigo}`;

    return this.http.get<Cliente>(url).pipe(
      tap(_ => this.log(`Cliente Codigo -> ${codigo} carregado`)),
      catchError(this.handleError<Cliente>(`getCliente codigo=${codigo}`))
    );
  }

  addNotas(nota) {
    return this.http.post(this.clientesUrl, nota);
  }
}
