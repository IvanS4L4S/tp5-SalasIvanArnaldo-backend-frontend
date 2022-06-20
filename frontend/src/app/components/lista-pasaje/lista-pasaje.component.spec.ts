import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasajeComponent } from './lista-pasaje.component';

describe('ListaPasajeComponent', () => {
  let component: ListaPasajeComponent;
  let fixture: ComponentFixture<ListaPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPasajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
