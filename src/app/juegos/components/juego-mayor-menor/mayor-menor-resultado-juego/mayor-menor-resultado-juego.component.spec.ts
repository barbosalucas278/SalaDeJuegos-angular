import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorMenorResultadoJuegoComponent } from './mayor-menor-resultado-juego.component';

describe('MayorMenorResultadoJuegoComponent', () => {
  let component: MayorMenorResultadoJuegoComponent;
  let fixture: ComponentFixture<MayorMenorResultadoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorMenorResultadoJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorMenorResultadoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
