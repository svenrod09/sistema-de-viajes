import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlternativoComponent } from './menu-alternativo.component';

describe('MenuAlternativoComponent', () => {
  let component: MenuAlternativoComponent;
  let fixture: ComponentFixture<MenuAlternativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAlternativoComponent]
    });
    fixture = TestBed.createComponent(MenuAlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
