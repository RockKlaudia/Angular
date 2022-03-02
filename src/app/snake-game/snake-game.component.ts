import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {
  public changePage = true;
  public counter: number = 0;
  public gameStatus: string = 'Starting from...';
  public timerHours:number = 0;
  public timerMinutes:number = 0;
  public timerSeconds:number = 0;

@Input() playerId: string = '';

  returnMain() {
    return this.changePage = false;
  };

  constructor() { }

  ngOnInit(): void {
  };

  public timerGo(){
    setInterval(() => {
      if(this.timerSeconds < 59){this.timerSeconds++
      } else {
          this.timerSeconds = 0;
          this.timerMinutes++;
      if(this.timerMinutes == 59){
          this.timerMinutes = 0;
        this.timerHours++;
    }
  }},1000)}
   
  public onGrow() {
    this.counter += 1;
  };
  public onGameOver() {
    alert('Game over');
    this.gameStatus = 'Game over';
  };
  public onReset() {
    this.counter = 0;
    this.gameStatus = '';
  };
  public onPause() {
    this.gameStatus = 'Paused';
  };
  public onPlay() {
    this.gameStatus = 'Playing';
  };





}
