import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrLectorPage } from './qr-lector.page';

describe('QrLectorPage', () => {
  let component: QrLectorPage;
  let fixture: ComponentFixture<QrLectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrLectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
