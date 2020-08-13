import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MapPageComponent } from './routes/map-page/map-page.component';
import { LinkPageComponent } from './routes/link-page/link-page.component';
import { Page1Component } from './routes/link-page/page1/page1.component';
import { Page2Component } from './routes/link-page/page2/page2.component';
import { MapComponent } from './routes/map-page/map/map.component';
import { PeopleListComponent } from './routes/map-page/people-list/people-list.component';
import { PeopleCardComponent } from './routes/map-page/people-list/people-card/people-card.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';

import { FormsModule } from '@angular/forms';
import {SearchService} from '../services/search.service';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MapPageComponent,
    LinkPageComponent,
    Page1Component,
    Page2Component,
    MapComponent,
    PeopleListComponent,
    PeopleCardComponent,
    SearchPipe
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
