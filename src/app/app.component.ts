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
  selectedCard: boolean[] = [];
  cards = [];
  moveRight() {
    for (let i = 0, len = this.lists.length; i < len; i++) {
      const leftright = this.lists[i];
      const found = this.cards.find((e: any) => e === leftright);
      if (!found) {
        this.cards.push(leftright);
        break;
      }
    }
    this.lists.splice(0, 1);
  }
  moveDoubleRight() {
    this.cards = this.lists.splice(0, this.lists.length);
  }
  moveDoubleLeft() {
    this.lists = this.cards.splice(0, this.cards.length);
  }
  moveLeft() {
    for (let i = 0, len = this.cards.length; i < len; i++) {
      const rightleft = this.cards[i];
      const move = this.lists.find((e: any) => e === rightleft);
      if (!move) {
        this.lists.push(rightleft);
        break;
      }
    }
    if (this.cards.length > 0) {
      this.cards.splice(0, 1);
    }
  }
  value() {
    this.searchText = null;
  }
  setClickedList(index) {
    this.selectedList[index] = !this.selectedList[index];
    console.log(index);
  }
  setClickedCard(index) {
    this.selectedCard[index] = !this.selectedCard[index];
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
