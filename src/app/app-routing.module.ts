import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/services/autServices/guards/auth.guard';
import { LandingPageComponent } from '@modules/landing/components/landing-page/landing-page.component';
import { Error404Component } from '@shared/components/error404/error404.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
    loadChildren: () => import("./modules/landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'main',
    loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule),
    canActivate:[authGuard]
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
