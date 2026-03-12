export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = document.querySelector('.js-type');

    this.selectedType = '';

    this.init();
  }
  init() {
    this.type.addEventListener('click', this.selectType.bind(this));
  }

  selectType(event) {
    this.bouton = event.currentTarget;
    this.type.classList.remove('is-active');
    this.type.classList.add('is-active');
    this.selectedType = this.bouton.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('.js-image');

    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
