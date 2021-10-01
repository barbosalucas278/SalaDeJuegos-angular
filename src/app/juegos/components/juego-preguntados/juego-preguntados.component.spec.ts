import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPreguntadosComponent } from './juego-preguntados.component';

describe('JuegoPreguntadosComponent', () => {
  let component: JuegoPreguntadosComponent;
  let fixture: ComponentFixture<JuegoPreguntadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoPreguntadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPreguntadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
