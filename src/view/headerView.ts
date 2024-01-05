import View from "./View";

class HeaderView extends View {
  private titleEl: HTMLHeadingElement;
  private scoreEl: HTMLHeadingElement;

  constructor() {
    super();

    this.renderHeaderElement("Snake Game");
    this.titleEl = <HTMLHeadingElement>document.querySelector("#title");
    this.scoreEl = <HTMLHeadingElement>document.querySelector("#score");
  }

  private renderHeaderElement(title: string): void {
    const html = `
    <div id="header">
        <h1 id="title">${title}</h1>
        <h2 id="score">Score: 0</h2>
    </div>
    `;

    this.renderEl(html);
  }
}

export default HeaderView;
