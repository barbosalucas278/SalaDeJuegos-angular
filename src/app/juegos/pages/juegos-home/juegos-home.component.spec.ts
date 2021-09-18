import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosHomeComponent } from './juegos-home.component';

describe('JuegosHomeComponent', () => {
  let component: JuegosHomeComponent;
  let fixture: ComponentFixture<JuegosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
