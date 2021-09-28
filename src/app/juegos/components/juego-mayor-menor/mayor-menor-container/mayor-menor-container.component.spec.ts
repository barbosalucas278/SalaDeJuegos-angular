import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorMenorContainerComponent } from './mayor-menor-container.component';

describe('MayorMenorContainerComponent', () => {
  let component: MayorMenorContainerComponent;
  let fixture: ComponentFixture<MayorMenorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorMenorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorMenorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
