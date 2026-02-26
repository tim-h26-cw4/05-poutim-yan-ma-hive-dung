import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.js-container');
    this.init();
  }
  init() {
    const poutine = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutine.length; i++) {
      const poutines = poutine[i];
      const instance = new Poutine();
      this.menu.push(instance);
    }
    this.element.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {}
}
