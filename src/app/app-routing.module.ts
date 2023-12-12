import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },

  //{ path: '', component: AppComponent },
  { path: '', component: HomeComponent, data: { title: 'Home' }},
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
