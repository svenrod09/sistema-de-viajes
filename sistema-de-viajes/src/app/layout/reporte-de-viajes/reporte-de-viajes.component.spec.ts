import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeViajesComponent } from './reporte-de-viajes.component';

describe('ReporteDeViajesComponent', () => {
  let component: ReporteDeViajesComponent;
  let fixture: ComponentFixture<ReporteDeViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeViajesComponent]
    });
    fixture = TestBed.createComponent(ReporteDeViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
