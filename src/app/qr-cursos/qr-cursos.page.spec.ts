import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCursosPage } from './qr-cursos.page';

describe('QrCursosPage', () => {
  let component: QrCursosPage;
  let fixture: ComponentFixture<QrCursosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
