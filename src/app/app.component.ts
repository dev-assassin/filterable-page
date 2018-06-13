import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = ['Team Name1', 'Team Name2', 'Team Name3', 'Team Name4', 'Team Name5'];
  searchText: string;
  selectedList: boolean[] = [];
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
  value() {
    this.searchText = null;
  }
  setClickedList(index) {
    this.selectedList[index] = !this.selectedList[index];
    console.log(index);
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
