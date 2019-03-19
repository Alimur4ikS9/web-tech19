import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'partners', component: PartnersComponent},
  { path: 'profile', component: ProfileComponent},
  //Пишите сюда ваши ссылки. Это будет выглядеть так: locahost8000/partners

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }