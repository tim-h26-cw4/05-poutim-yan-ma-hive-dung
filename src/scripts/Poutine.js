export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.js-type');

    this.selectedType = '';

    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const bouton = this.types[i];
      bouton.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    this.bouton = event.currentTarget;

    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    this.bouton.classList.add('is-active');
    this.selectedType = this.bouton.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('.js-image');

    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
