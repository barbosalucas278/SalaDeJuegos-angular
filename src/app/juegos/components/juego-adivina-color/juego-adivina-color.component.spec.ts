import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAdivinaColorComponent } from './juego-adivina-color.component';

describe('JuegoAdivinaColorComponent', () => {
  let component: JuegoAdivinaColorComponent;
  let fixture: ComponentFixture<JuegoAdivinaColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAdivinaColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAdivinaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
