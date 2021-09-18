import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAhorcadoComponent } from './juego-ahorcado.component';

describe('JuegoAhorcadoComponent', () => {
  let component: JuegoAhorcadoComponent;
  let fixture: ComponentFixture<JuegoAhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAhorcadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
