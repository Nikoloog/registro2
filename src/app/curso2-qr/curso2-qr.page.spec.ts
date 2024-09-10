import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso2QrPage } from './curso2-qr.page';

describe('Curso2QrPage', () => {
  let component: Curso2QrPage;
  let fixture: ComponentFixture<Curso2QrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso2QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
