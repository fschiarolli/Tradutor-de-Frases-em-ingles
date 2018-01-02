import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
