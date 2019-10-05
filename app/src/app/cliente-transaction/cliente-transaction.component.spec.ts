import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTransactionComponent } from './cliente-transaction.component';

describe('ClienteTransactionComponent', () => {
  let component: ClienteTransactionComponent;
  let fixture: ComponentFixture<ClienteTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
