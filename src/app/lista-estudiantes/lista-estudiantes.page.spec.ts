import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEstudiantesPage } from './lista-estudiantes.page';

describe('ListaEstudiantesPage', () => {
  let component: ListaEstudiantesPage;
  let fixture: ComponentFixture<ListaEstudiantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
