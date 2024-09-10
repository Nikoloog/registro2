import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr-cursos',
  templateUrl: './qr-cursos.page.html',
  styleUrls: ['./qr-cursos.page.scss'],
})
export class QrCursosPage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  goToQR(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username } });
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}