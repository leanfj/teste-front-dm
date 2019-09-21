import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInfoComponent } from './cliente-info.component';

describe('ClienteInfoComponent', () => {
  let component: ClienteInfoComponent;
  let fixture: ComponentFixture<ClienteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
