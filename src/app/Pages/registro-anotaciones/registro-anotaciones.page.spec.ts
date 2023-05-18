import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAnotacionesPage } from './registro-anotaciones.page';

describe('RegistroAnotacionesPage', () => {
  let component: RegistroAnotacionesPage;
  let fixture: ComponentFixture<RegistroAnotacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroAnotacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
