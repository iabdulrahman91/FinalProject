import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';


import { AppComponent } from './app.component';
import { ViewDataComponent } from './view-data/view-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService, HttpClientModule, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
