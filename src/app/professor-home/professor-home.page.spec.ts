import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorHomePage } from './professor-home.page';

describe('ProfessorHomePage', () => {
  let component: ProfessorHomePage;
  let fixture: ComponentFixture<ProfessorHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
