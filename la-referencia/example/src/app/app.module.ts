import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LrwHistoricWidgetComponent } from './components/lrw-historic-widget/lrw-historic-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LrwHistoricWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
