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

  private getEndResult(score: number) {
    return `Your final score is ${score}.
    <br/>
    Press enter to try again.  
    `;
  }

  hideModalElement(): void {
    this.modalEl.classList.add("transparent");

    setTimeout(() => {
      this.modalEl.classList.add("hidden");
    }, 300);
  }

  showModalElement(score: number): void {
    this.modalEl.innerHTML = this.getEndResult(score);
    this.modalEl.classList.remove("hidden");

    setTimeout(() => {
      this.modalEl.classList.remove("transparent");
    }, 0);
  }
}

export default ModalView;
