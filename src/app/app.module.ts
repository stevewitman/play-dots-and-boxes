import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { DotComponent } from './components/dot/dot.component';
import { LineComponent } from './components/line/line.component';
import { SquareComponent } from './components/square/square.component';
import { HorizComponent } from './components/horiz/horiz.component';
import { VertComponent } from './components/vert/vert.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DotComponent,
    LineComponent,
    SquareComponent,
    HorizComponent,
    VertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
