import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarSucursalComponent } from './asignar-sucursal.component';

describe('AsignarSucursalComponent', () => {
  let component: AsignarSucursalComponent;
  let fixture: ComponentFixture<AsignarSucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarSucursalComponent]
    });
    fixture = TestBed.createComponent(AsignarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
