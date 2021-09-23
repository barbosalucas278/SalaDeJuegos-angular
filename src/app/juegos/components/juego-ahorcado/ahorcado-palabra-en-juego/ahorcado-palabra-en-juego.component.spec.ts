import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoPalabraEnJuegoComponent } from './ahorcado-palabra-en-juego.component';

describe('AhorcadoPalabraEnJuegoComponent', () => {
  let component: AhorcadoPalabraEnJuegoComponent;
  let fixture: ComponentFixture<AhorcadoPalabraEnJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoPalabraEnJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoPalabraEnJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
