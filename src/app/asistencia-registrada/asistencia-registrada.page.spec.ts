import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaRegistradaPage } from './asistencia-registrada.page';

describe('AsistenciaRegistradaPage', () => {
  let component: AsistenciaRegistradaPage;
  let fixture: ComponentFixture<AsistenciaRegistradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaRegistradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
