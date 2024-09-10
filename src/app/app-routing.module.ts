import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'professor-home',
    loadChildren: () => import('./professor-home/professor-home.module').then( m => m.ProfessorHomePageModule)
  },
  {
    path: 'listar-cursos',
    loadChildren: () => import('./listar-cursos/listar-cursos.module').then( m => m.ListarCursosPageModule)
  },
  {
    path: 'curso1',
    loadChildren: () => import('./curso1/curso1.module').then( m => m.Curso1PageModule)
  },
  {
    path: 'curso2',
    loadChildren: () => import('./curso2/curso2.module').then( m => m.Curso2PageModule)
  },
  {
    path: 'curso3',
    loadChildren: () => import('./curso3/curso3.module').then( m => m.Curso3PageModule)
  },
  {
    path: 'curso4',
    loadChildren: () => import('./curso4/curso4.module').then( m => m.Curso4PageModule)
  },
  {
    path: 'curso1-qr',
    loadChildren: () => import('./curso1-qr/curso1-qr.module').then( m => m.Curso1QrPageModule)
  },
  {
    path: 'curso2-qr',
    loadChildren: () => import('./curso2-qr/curso2-qr.module').then( m => m.Curso2QrPageModule)
  },
  {
    path: 'curso3-qr',
    loadChildren: () => import('./curso3-qr/curso3-qr.module').then( m => m.Curso3QrPageModule)
  },
  {
    path: 'curso4-qr',
    loadChildren: () => import('./curso4-qr/curso4-qr.module').then( m => m.Curso4QrPageModule)
  },
  {
    path: 'qr-cursos',
    loadChildren: () => import('./qr-cursos/qr-cursos.module').then( m => m.QrCursosPageModule)
  },
  {
    path: 'lista-estudiantes',
    loadChildren: () => import('./lista-estudiantes/lista-estudiantes.module').then( m => m.ListaEstudiantesPageModule)
  },
  {
    path: 'listar-reprobados',
    loadChildren: () => import('./listar-reprobados/listar-reprobados.module').then( m => m.ListarReprobadosPageModule)
  },
  {
    path: 'curso1-reprobados',
    loadChildren: () => import('./curso1-reprobados/curso1-reprobados.module').then( m => m.Curso1ReprobadosPageModule)
  },
  {
    path: 'curso2-reprobados',
    loadChildren: () => import('./curso2-reprobados/curso2-reprobados.module').then( m => m.Curso2ReprobadosPageModule)
  },
  {
    path: 'curso3-reprobados',
    loadChildren: () => import('./curso3-reprobados/curso3-reprobados.module').then( m => m.Curso3ReprobadosPageModule)
  },
  {
    path: 'curso4-reprobados',
    loadChildren: () => import('./curso4-reprobados/curso4-reprobados.module').then( m => m.Curso4ReprobadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }