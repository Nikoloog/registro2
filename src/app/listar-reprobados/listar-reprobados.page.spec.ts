import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarReprobadosPage } from './listar-reprobados.page';

describe('ListarReprobadosPage', () => {
  let component: ListarReprobadosPage;
  let fixture: ComponentFixture<ListarReprobadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReprobadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
