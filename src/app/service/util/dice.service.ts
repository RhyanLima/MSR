import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  // Repensar essa classe

  constructor() { }

  rollD4 () {
    return Math.floor(Math.random() * 4) + 1;
  }

  rollD6 () {
    return Math.floor(Math.random() * 6) + 1
  }

  rollD8 () {
    return Math.floor(Math.random() * 8) + 1
  }

  rollD10 () {
    return Math.floor(Math.random() * 10) + 1
  }

  rollD12 () {
    return Math.floor(Math.random() * 12) + 1
  }

  rollD20 () {
    return Math.floor(Math.random() * 20) + 1
  }

  rollD100 () {
    return Math.floor(Math.random() * 100) + 1
  }

  rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }


}
