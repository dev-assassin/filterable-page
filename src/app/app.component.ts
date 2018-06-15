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
  isDisabledLR = false;
  isDisabledRL = true;
  moveRight() {
    for (let i = 0, len = this.lists.length; i < len; i++) {
      if (this.selectedList[i] === true) {
        const leftright = this.lists[i];
        this.cards.push(leftright);
        this.lists.splice(i, 1);
        this.selectedList.splice(i, 1);
        i--;
      }
    }
    this.isDisabledRL = false;
  }
  moveDoubleRight() {
    this.cards = this.cards.concat(this.lists);
    this.lists = [];
    this.selectedCard = [];
    this.selectedList = [];
    this.isDisabledLR = true;
    this.isDisabledRL = false;
  }
  moveDoubleLeft() {
    this.lists = this.lists.concat(this.cards);
    this.cards = [];
    this.selectedCard = [];
    this.selectedList = [];
    this.isDisabledRL = true;
    this.isDisabledLR = false;
  }
  moveLeft() {
    for (let i = 0, len = this.cards.length; i < len; i++) {
      if (this.selectedCard[i] === true) {
        const rigntleft = this.cards[i];
        this.lists.push(rigntleft);
        this.cards.splice(i, 1);
        this.selectedCard.splice(i, 1);
        i--;
      }
    }
  }
  value() {
    this.searchText = null;
  }
  setClickedList(index) {
    this.selectedList[index] = !this.selectedList[index];
  }
  setClickedCard(index) {
    this.selectedCard[index] = !this.selectedCard[index];
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
