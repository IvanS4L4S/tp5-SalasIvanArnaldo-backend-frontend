import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDeLibroComponent } from './alta-de-libro.component';

describe('AltaDeLibroComponent', () => {
  let component: AltaDeLibroComponent;
  let fixture: ComponentFixture<AltaDeLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaDeLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaDeLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
