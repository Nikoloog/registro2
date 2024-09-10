import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCursosPage } from './listar-cursos.page';

describe('ListarCursosPage', () => {
  let component: ListarCursosPage;
  let fixture: ComponentFixture<ListarCursosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
