import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './Routes/map-page/map-page.component';
import { LinkPageComponent } from './Routes/link-page/link-page.component';
import { Page1Component } from './Routes/link-page/page1/page1.component';
import { Page2Component } from './Routes/link-page/page2/page2.component';


const routes: Routes = [
  {
    path: '',
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
