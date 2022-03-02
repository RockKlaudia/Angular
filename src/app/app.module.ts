import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import {NgxSnakeModule} from 'ngx-snake';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFormComponent,
    SnakeGameComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
