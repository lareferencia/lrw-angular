import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LrwRepositoryWidgetComponent } from './components/lrw-repository-widget/lrw-repository-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LrwRepositoryWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
