import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesVencidosComponent } from './clientes-vencidos.component';

describe('ClientesVencidosComponent', () => {
  let component: ClientesVencidosComponent;
  let fixture: ComponentFixture<ClientesVencidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesVencidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesVencidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
