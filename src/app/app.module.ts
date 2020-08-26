import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MapPageComponent } from './ro/map-page/map-page.component';
import { LinkPageComponent } from './ro/link-page/link-page.component';
import { MapComponent } from './ro/map-page/map/map.component';
import { PeopleListComponent } from './ro/map-page/people-list/people-list.component';
import { PeopleCardComponent } from './ro/map-page/people-list/people-card/people-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CdkScrollableModule} from '@angular/cdk/scrolling';

import { SearchPipe } from './search.pipe';

import { FormsModule } from '@angular/forms';
import {SearchService} from '../services/search.service';
import { Floor2Component } from './ro/map-page/map/floor2/floor2.component';
import { Floor1Component } from './ro/map-page/map/floor1/floor1.component';
import { Floor0Component } from './ro/map-page/map/floor0/floor0.component';
import { FloorBaseComponent } from './ro/map-page/map/floor-base/floor-base.component';
import { LinkCardComponent } from './ro/link-page/link-card/link-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MapPageComponent,
    LinkPageComponent,
    MapComponent,
    PeopleListComponent,
    PeopleCardComponent,
    SearchPipe,
    Floor2Component,
    Floor1Component,
    Floor0Component,
    FloorBaseComponent,
    LinkCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    CdkScrollableModule,
    NgbModule,
  ],
  providers: [
    SearchService,
    SearchPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
