import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './ro/map-page/map-page.component';
import { LinkPageComponent } from './ro/link-page/link-page.component';
import { Page1Component } from './ro/link-page/page1/page1.component';
import { Page2Component } from './ro/link-page/page2/page2.component';


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
  component: MapPageComponent
},
  {
    path: 'home',
  component: LinkPageComponent,
  children: [
    {path: 'page1', component: Page1Component },
    {path: 'page2', component: Page2Component }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
