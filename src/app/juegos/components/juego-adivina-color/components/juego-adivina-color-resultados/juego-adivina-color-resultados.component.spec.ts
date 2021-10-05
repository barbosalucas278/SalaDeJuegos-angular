import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAdivinaColorResultadosComponent } from './juego-adivina-color-resultados.component';

describe('JuegoAdivinaColorResultadosComponent', () => {
  let component: JuegoAdivinaColorResultadosComponent;
  let fixture: ComponentFixture<JuegoAdivinaColorResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAdivinaColorResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAdivinaColorResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
