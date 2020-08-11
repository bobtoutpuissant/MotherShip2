import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContComponent } from './app-cont/app-cont.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page1Component } from './home-page/page1/page1.component';
import { Page2Component } from './home-page/page2/page2.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/page1',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home/page1',
    pathMatch: 'full'
  },
  {
    path: 'map',
  component: AppContComponent
},
  {
    path: 'home',
  component: HomePageComponent,
  children: [
    {path: 'page1', component: Page1Component },
    {path: 'page2', component: Page2Component }
  ]
},
{
  path: '**',
  component: ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
