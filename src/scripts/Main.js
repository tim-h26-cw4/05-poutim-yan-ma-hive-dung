import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();
class Main {
  constructor() {
    this.init();
  }
  init() {
    const chef = document.querySelectorAll('[data-component="Chef"]');
    for (let i = 0; i < chef.length; i++) {
      const chefs = chef[i];
      new Chef(chefs);
    }
  }
}
new Main();
