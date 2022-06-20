import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPasajeComponent } from './alta-pasaje.component';

describe('AltaPasajeComponent', () => {
  let component: AltaPasajeComponent;
  let fixture: ComponentFixture<AltaPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPasajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
