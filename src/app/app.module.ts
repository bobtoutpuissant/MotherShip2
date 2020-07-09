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

@NgModule({
  declarations: [
    AppComponent,
    PopCardTempComponent,
    PopCardListComponent,
    MapCompComponent,
    SrcBarComponent,
    AppContComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
