import View from "./View";

class HeaderView extends View {
  private resultEl: HTMLElement;

  constructor() {
    super();

    this.renderHeaderElement("Snake Game");
    this.resultEl = <HTMLHeadingElement>document.querySelector("#result");
  }

  private renderHeaderElement(title: string): void {
    const html = `
    <div id="header">
        <h1 id="title">${title}</h1>
        <h2 id="score">Score: <span id="result">0</span></h2>
    </div>
    `;

    this.renderEl(html);
  }

  updateScore(score: number): void {
    this.resultEl.innerHTML = score.toString();
  }
}

export default HeaderView;
