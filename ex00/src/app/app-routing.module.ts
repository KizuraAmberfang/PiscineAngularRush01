import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImagesComponent } from './pages/images/images.component';
import { SearchComponent } from './pages/search/search.component';
import { TodayComponent } from './pages/today/today.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'image', component: ImagesComponent},
  { path: 'image/:id', component: ImagesComponent},
  { path: 'search', component: SearchComponent},
  { path: 'today', component: TodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
