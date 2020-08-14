import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './ro/map-page/map-page.component';
import { LinkPageComponent } from './ro/link-page/link-page.component';
import { Page1Component } from './ro/link-page/page1/page1.component';
import { Page2Component } from './ro/link-page/page2/page2.component';
import { Floor0Component } from './ro/map-page/map/floor0/floor0.component';
import { Floor1Component } from './ro/map-page/map/floor1/floor1.component';
import { Floor2Component } from './ro/map-page/map/floor2/floor2.component';


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
  component: MapPageComponent,
  children: [
    {path: 'floor0', component: Floor0Component},
    {path: 'floor1', component: Floor1Component},
    {path: 'floor2', component: Floor2Component}
  ]
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
