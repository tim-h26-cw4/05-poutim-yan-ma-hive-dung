export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.js-type');
    this.selectedType = 'e';
    this.updatePhoto();

    this.init();
  }
  init() {
    const boutons = document.querySelectorAll('.button');
    for (let i = 0; i < boutons.length; i++) {
      const bouton = boutons[i];
      bouton.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    const bouton = event.currentTarget;
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');

      this.selectedType = type;
    }
    bouton.classList.add('is-active');
  }
  updatePhoto() {
    const image = document.querySelector('.js-image');

    image.classList.add('is-active');
    if ('poulet' in this.element.dataset) {
      this.selectedType = poulet;
      image.src = `assets/images/${this.selectedType}.png`;
    }
  }
}
