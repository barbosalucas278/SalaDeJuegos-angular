import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDetalleComponent } from './resultado-detalle.component';

describe('ResultadoDetalleComponent', () => {
  let component: ResultadoDetalleComponent;
  let fixture: ComponentFixture<ResultadoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
