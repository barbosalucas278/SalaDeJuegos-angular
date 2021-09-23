import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoLetrasRestantesComponent } from './ahorcado-letras-restantes.component';

describe('AhorcadoLetrasRestantesComponent', () => {
  let component: AhorcadoLetrasRestantesComponent;
  let fixture: ComponentFixture<AhorcadoLetrasRestantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoLetrasRestantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoLetrasRestantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
