import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContComponent } from './app-cont/app-cont.component';
import { StartpageMainComponent } from './startpage-main/startpage-main.component';
import { StartpagePlusComponent } from './startpage-plus/startpage-plus.component';
import { StartpageMainRestrictedComponent } from './startpage-main-restricted/startpage-main-restricted.component';
import { StartpagePlusRestrictedComponent } from './startpage-plus-restricted/startpage-plus-restricted.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'map', component: AppContComponent},
  {path: 'home', component: StartpageMainRestrictedComponent},
  {path: 'plus', component: StartpagePlusRestrictedComponent}
  // {path: 'home', component: StartpageMainComponent},
  // {path: 'plus', component: StartpagePlusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
