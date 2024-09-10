import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso1ReprobadosPage } from './curso1-reprobados.page';

describe('Curso1ReprobadosPage', () => {
  let component: Curso1ReprobadosPage;
  let fixture: ComponentFixture<Curso1ReprobadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso1ReprobadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
