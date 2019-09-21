import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.sass']
})
export class ClienteInfoComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor() {}

  ngOnInit() {}
}
