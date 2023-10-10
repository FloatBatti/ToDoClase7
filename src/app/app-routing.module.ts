import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '@modules/landing/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: '',
    component: LandingPageComponent,
    loadChildren: () => import("./modules/landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: 'main',
    loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
