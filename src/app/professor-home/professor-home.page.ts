import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.page.html',
  styleUrls: ['./professor-home.page.scss'],
})
export class ProfessorHomePage implements OnInit {
  username: string = '';
  role: string = '';

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.getItem('users', 'currentUser').then((user: any) => {
      if (user && user.role === 'profesor') {
        this.username = user.name;
        this.role = user.role;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username, role: this.role } });
  }

  logout() {
    this.storageService.removeItem('users', 'currentUser').then(() => {
      this.router.navigate(['/login']);
    });
  }
}