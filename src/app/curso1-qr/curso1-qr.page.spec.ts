import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso1QrPage } from './curso1-qr.page';

describe('Curso1QrPage', () => {
  let component: Curso1QrPage;
  let fixture: ComponentFixture<Curso1QrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso1QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
