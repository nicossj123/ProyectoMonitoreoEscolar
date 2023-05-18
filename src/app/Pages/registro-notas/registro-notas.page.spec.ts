import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroNotasPage } from './registro-notas.page';

describe('RegistroNotasPage', () => {
  let component: RegistroNotasPage;
  let fixture: ComponentFixture<RegistroNotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
