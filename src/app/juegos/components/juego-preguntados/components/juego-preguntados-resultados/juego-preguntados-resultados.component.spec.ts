import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPreguntadosResultadosComponent } from './juego-preguntados-resultados.component';

describe('JuegoPreguntadosResultadosComponent', () => {
  let component: JuegoPreguntadosResultadosComponent;
  let fixture: ComponentFixture<JuegoPreguntadosResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoPreguntadosResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPreguntadosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
