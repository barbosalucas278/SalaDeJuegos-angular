import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAdivinaColorContainerComponent } from './juego-adivina-color-container.component';

describe('JuegoAdivinaColorContainerComponent', () => {
  let component: JuegoAdivinaColorContainerComponent;
  let fixture: ComponentFixture<JuegoAdivinaColorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAdivinaColorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAdivinaColorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
