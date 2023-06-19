import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarViajeComponent } from './registrar-viaje.component';

describe('RegistrarViajeComponent', () => {
  let component: RegistrarViajeComponent;
  let fixture: ComponentFixture<RegistrarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarViajeComponent]
    });
    fixture = TestBed.createComponent(RegistrarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
