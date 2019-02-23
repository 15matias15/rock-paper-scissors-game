import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameOptions = [
    { name: 'rock', strength: 'scissors', weakness: 'paper' },
    { name: 'paper', strength: 'rock', weakness: 'scissors' },
    { name: 'scissors', strength: 'paper', weakness: 'rock' }
  ];
  played = false;
  selected = null;
  result = null;
  prevResult = [];
  machineOption = null;
  win = 0;
  lose = 0;

  onSelect(option: string) {
    this.selected = option;
    this.played = true;
  }

  onPlay() {
    this.machineOption = this.gameOptions[Math.floor(Math.random() * this.gameOptions.length)].name;
    if (this.selected === 'rock') {
      if (this.machineOption === 'rock') {
        this.result = 'tied';
      } else if (this.machineOption === 'paper') {
        this.result = 'lose';
        this.lose++;
      } else if (this.machineOption === 'scissors') {
        this.result = 'win';
        this.win++;
      }
    } else if (this.selected === 'paper') {
      if (this.machineOption === 'rock') {
        this.result = 'win';
        this.win++;
      } else if (this.machineOption === 'paper') {
        this.result = 'tied';
      } else if (this.machineOption === 'scissors') {
        this.result = 'lose';
        this.lose++;
      }
    } else if (this.selected === 'scissors') {
      if (this.machineOption === 'rock') {
        this.result = 'lose';
        this.lose++;
      } else if (this.machineOption === 'paper') {
        this.result = 'win';
        this.win++;
      } else if (this.machineOption === 'scissors') {
        this.result = 'tied';
      }
    }
    const resultHistory = {
      selected: this.selected,
      result: this.result
    };
    this.prevResult.unshift(resultHistory);
    this.played = false;
    this.selected = null;
  }

  onReset() {
    this.played = false;
    this.selected = null;
    this.result = null;
    this.prevResult = [];
    this.machineOption = null;
  }
}
