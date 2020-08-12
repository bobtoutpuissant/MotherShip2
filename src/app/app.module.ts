import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PopCardTempComponent } from './pop-card-temp/pop-card-temp.component';
import { PopCardListComponent } from './pop-card-list/pop-card-list.component';
import { MapCompComponent } from './map-comp/map-comp.component';
import { SrcBarComponent } from './src-bar/src-bar.component';
import { AppContComponent } from './app-cont/app-cont.component';
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
import SearchService from '../services/search.service';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PopCardTempComponent,
    PopCardListComponent,
    MapCompComponent,
    SrcBarComponent,
    AppContComponent,
    SearchPipe,
    HomePageComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CdkScrollableModule,
    AppRoutingModule
  ],
  providers: [
    SearchService,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
