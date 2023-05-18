import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRegistrosPage } from './menu-registros.page';

describe('MenuRegistrosPage', () => {
  let component: MenuRegistrosPage;
  let fixture: ComponentFixture<MenuRegistrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
