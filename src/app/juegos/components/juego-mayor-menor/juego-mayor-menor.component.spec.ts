import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoMayorMenorComponent } from './juego-mayor-menor.component';

describe('JuegoMayorMenorComponent', () => {
  let component: JuegoMayorMenorComponent;
  let fixture: ComponentFixture<JuegoMayorMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoMayorMenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoMayorMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
