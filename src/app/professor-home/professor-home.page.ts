import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.page.html',
  styleUrls: ['./professor-home.page.scss'],
})
export class ProfessorHomePage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username } });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}