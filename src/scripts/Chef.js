import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.js-container');
    this.init();
  }
  init() {
    const instance = new Poutine(this.element);
    this.menu.push(instance);
    this.element.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {}
}
