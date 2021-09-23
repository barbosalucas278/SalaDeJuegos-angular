import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoContainerComponent } from './ahorcado-container.component';

describe('AhorcadoContainerComponent', () => {
  let component: AhorcadoContainerComponent;
  let fixture: ComponentFixture<AhorcadoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
