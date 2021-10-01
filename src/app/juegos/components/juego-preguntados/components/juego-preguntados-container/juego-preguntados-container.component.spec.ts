import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPreguntadosContainerComponent } from './juego-preguntados-container.component';

describe('JuegoPreguntadosContainerComponent', () => {
  let component: JuegoPreguntadosContainerComponent;
  let fixture: ComponentFixture<JuegoPreguntadosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoPreguntadosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPreguntadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
