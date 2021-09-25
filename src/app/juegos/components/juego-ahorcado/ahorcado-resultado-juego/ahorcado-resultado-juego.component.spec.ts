import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoResultadoJuegoComponent } from './ahorcado-resultado-juego.component';

describe('AhorcadoResultadoJuegoComponent', () => {
  let component: AhorcadoResultadoJuegoComponent;
  let fixture: ComponentFixture<AhorcadoResultadoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoResultadoJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoResultadoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
