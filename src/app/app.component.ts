import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = ['move this card',
           'click this card',
           'drag and drop this card'];
  moveRight() {
    console.log('move right card');
  }
  moveDoubleRight() {
    console.log('move double right cards');
  }
  moveDoubleLeft() {
    console.log('move double left cards');
  }
  moveLeft() {
    console.log('move left card');
  }
}

// import { Region } from "./region";
export class Team {
  descr: string;
  id: number;
  name: string;
  code: string;
}

export class TeamMenuEvent {
  type?: string;
  team?: Team;
}

export const TeamMenuEventType = {
  EDIT_TEAM: 'EDIT_TEAM',
  ADD_TEAM: 'ADD_TEAM',
  DELETE_TEAM: 'DELETE_TEAM',
  // NOTIFY_TEAMS:'NOTIFY_TEAMS',
};
