import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FzButtonModule } from 'projects/fz-button/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
