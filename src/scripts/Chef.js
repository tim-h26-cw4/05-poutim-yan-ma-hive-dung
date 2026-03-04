import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.options = {
      total: 0,
      poulet: 1,
      touskiL: 1,
      saucisse: 1,
      addition: 0,
    };
    this.order = document.querySelectorAll('.js-submit');
    this.container = document.querySelector('.js-container');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    for (let i = 0; i < this.order.length; i++) {
      const orders = this.order[i];
      orders.addEventListener('click', this.sendOrder.bind(this));
    }
  }
  sendOrder() {
    this.poulet = document.querySelectorAll('.js-type');
    this.active = document.querySelectorAll('.is-active');
    for (let i = 0; i < this.active.length; i++) {
      let actives = this.active[i];
      actives = true;

      for (let i = 0; i < this.poulet.length; i++) {
        const poulets = this.poulet[i];
        if ('poulet' in poulets.dataset && actives == true) {
          this.options.total = this.options.poulet;
        }
        if ('touski' in poulets.dataset) {
          this.options.total = 1;
        }
        if ('saucisse' in poulets.dataset) {
          this.options.total = 1;
        }
      }
    }
    this.container.innerHTML = '';
    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) : ${this.options.total}`;
    this.container.appendChild(p);
  }
}
