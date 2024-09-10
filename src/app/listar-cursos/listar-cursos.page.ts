import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.page.html',
  styleUrls: ['./listar-cursos.page.scss'],
})
export class ListarCursosPage implements OnInit {
  username: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username } });
  }

  goBack() {
    this.navCtrl.back();
  }
}