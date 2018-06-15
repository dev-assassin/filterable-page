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
        console.log(this.cards, i);
        this.lists.splice(i, 1);
      }
    }
    this.isDisabledRL = false;
  }
  moveDoubleRight() {
    this.cards = this.lists;
    this.lists = [];
    this.isDisabledLR = true;
    this.isDisabledRL = false;
  }
  moveDoubleLeft() {
    this.lists = this.cards;
    this.cards = [];
    this.isDisabledRL = true;
    this.isDisabledLR = false;
  }
  moveLeft() {
    for (let i = 0, len = this.cards.length; i < len; i++) {
      if (this.selectedCard[i] === true) {
        const rigntleft = this.cards[i];
        this.lists.push(rigntleft);
        console.log(this.lists, i);
        this.cards.splice(i, 1);
      }
    }
  }
  value() {
    this.searchText = null;
  }
  setClickedList(index) {
    this.selectedList[index] = !this.selectedList[index];
    console.log(this.selectedList[index], index);
  }
  setClickedCard(index) {
    this.selectedCard[index] = !this.selectedCard[index];
    console.log(index, this.selectedCard[index]);
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
