import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  public playerName: string= '';
  public playerEmail: string='';
  @Output() fullPlayerForm = new EventEmitter<string>();

  onClick() {
    this.fullPlayerForm.emit(this.playerName)
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
