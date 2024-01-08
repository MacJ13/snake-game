import View from "./View";

class ModalView extends View {
  private modalEl: HTMLElement;

  constructor() {
    super();

    this.modalEl = this.createModalElement();

    this.renderEl(this.modalEl);
  }

  private createModalElement(): HTMLElement {
    const div = document.createElement("div");
    div.id = "modal";
    div.innerHTML = "press enter to start the game";

    return div;
  }

  hideModalElement(): void {
    this.modalEl.classList.add("transparent");

    setTimeout(() => {
      this.modalEl.classList.add("hidden");
    }, 300);
  }
}

export default ModalView;
