import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso4QrPage } from './curso4-qr.page';

describe('Curso4QrPage', () => {
  let component: Curso4QrPage;
  let fixture: ComponentFixture<Curso4QrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso4QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
