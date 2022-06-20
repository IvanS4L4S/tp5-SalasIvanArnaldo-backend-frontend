import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDivisaComponent } from './lista-divisa.component';

describe('ListaDivisaComponent', () => {
  let component: ListaDivisaComponent;
  let fixture: ComponentFixture<ListaDivisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDivisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
