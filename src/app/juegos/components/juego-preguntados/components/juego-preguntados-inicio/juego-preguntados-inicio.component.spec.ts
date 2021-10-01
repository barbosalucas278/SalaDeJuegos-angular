import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPreguntadosInicioComponent } from './juego-preguntados-inicio.component';

describe('JuegoPreguntadosInicioComponent', () => {
  let component: JuegoPreguntadosInicioComponent;
  let fixture: ComponentFixture<JuegoPreguntadosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoPreguntadosInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPreguntadosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
