import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJuegosComponent } from './list-juegos.component';

describe('ListJuegosComponent', () => {
  let component: ListJuegosComponent;
  let fixture: ComponentFixture<ListJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
