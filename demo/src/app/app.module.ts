import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// TODO: this import is not working
// import { ModuleB } from 'module-b/module-b';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // FeatureAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
