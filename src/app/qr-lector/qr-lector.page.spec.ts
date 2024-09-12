import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrLectorPage } from './qr-lector.page';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('QrLectorPage', () => {
  let component: QrLectorPage;
  let fixture: ComponentFixture<QrLectorPage>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = {
      queryParams: of({ username: 'testuser' })
    };

    TestBed.configureTestingModule({
      declarations: [ QrLectorPage ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QrLectorPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to asistencia-registrada on QR scan', () => {
    component.onQrScanned('testQR');
    expect(router.navigate).toHaveBeenCalledWith(['/asistencia-registrada'], { queryParams: { qrData: 'testQR', username: 'testuser' } });
  });
});