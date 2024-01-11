import View from "./View";

class ModalView extends View {
  private modalEl: HTMLElement;

  constructor() {
    super();

    this.modalEl = this.createModalElement();

    this.renderEl(this.modalEl);
  }

  private createModalElement(): HTMLElement {
    const modalEl = document.createElement("div");
    modalEl.id = "modal";
    modalEl.innerHTML = this.renderModalInfo();

    return modalEl;
  }

  private renderModalInfo(): string {
    return "<div id='modal__info'>Press <span id='enter'>enter</span> to start the game</div>";
  }

  private renderModalResult(score: number) {
    return `
      <div id='modal__info'>
        Your final score is ${score}.
        <br/>
        Press <span id="enter">enter</span> to try again.  
      </div>
    `;
  }

  hideModalElement(): void {
    this.modalEl.classList.add("transparent");

    setTimeout(() => {
      this.modalEl.classList.add("hidden");
    }, 300);
  }

  showModalElement(score: number): void {
    this.modalEl.innerHTML = this.renderModalResult(score);
    this.modalEl.classList.remove("hidden");

    setTimeout(() => {
      this.modalEl.classList.remove("transparent");
    }, 0);
  }
}

export default ModalView;
