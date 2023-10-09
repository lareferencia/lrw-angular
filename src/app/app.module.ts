import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LrwLAReferenciaModule } from 'projects/lrw-lareferencia/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LrwLAReferenciaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
