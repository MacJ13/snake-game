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
    modalEl.innerHTML = this.getModalInfo();

    return modalEl;
  }

  private getModalInfo(): string {
    return "<div id='modal__info'>press <span id='enter'>enter</span> to start the game</div>";
  }

  private getEndResult(score: number) {
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
    this.modalEl.innerHTML = this.getEndResult(score);
    this.modalEl.classList.remove("hidden");

    setTimeout(() => {
      this.modalEl.classList.remove("transparent");
    }, 0);
  }
}

export default ModalView;
