import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso3QrPage } from './curso3-qr.page';

describe('Curso3QrPage', () => {
  let component: Curso3QrPage;
  let fixture: ComponentFixture<Curso3QrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso3QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
