import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialFacturaComponent } from './historial-factura.component';

describe('HistorialFacturaComponent', () => {
  let component: HistorialFacturaComponent;
  let fixture: ComponentFixture<HistorialFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
