export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.js-type');
    this.selectedType = 'poutine';
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

  selectType() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];

      type.classList.remove('is-active');
      type.classList.add('is-active');
      this.selectedType = type;
    }
  }
  updatePhoto() {
    const image = document.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
