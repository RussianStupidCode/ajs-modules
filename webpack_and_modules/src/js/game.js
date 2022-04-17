import Character from './domain';

export default class Game {
  start() {
    this.character = new Character();
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}
