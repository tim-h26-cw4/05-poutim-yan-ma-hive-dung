import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.order = document.querySelector('.js-submit');
    this.container = document.querySelector('.js-container');
    this.chef = document.querySelector('.chef');
    this.init();
  }
  init() {
    const poutines = this.element.querySelector('.js-poutine');

    const instance = new Poutine(poutines);
    this.menu.push(instance);

    for (let i = 0; i < this.order.length; i++) {
      const orders = this.order[i];
      orders.addEventListener('click', this.sendOrder.bind(this));
    }
  }
  sendOrder() {}
}
