import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fidelidade';
  selectedCliente: Cliente;

  onSelectedClient(event) {
    this.selectedCliente = event;
    console.log(event);
  }
}
