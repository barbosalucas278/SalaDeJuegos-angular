import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultadosComponent } from './list-resultados.component';

describe('ListResultadosComponent', () => {
  let component: ListResultadosComponent;
  let fixture: ComponentFixture<ListResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
