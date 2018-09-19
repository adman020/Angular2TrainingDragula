import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';


@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
