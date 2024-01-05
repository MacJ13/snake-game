class View {
  rootEl: HTMLElement = document.querySelector("#app")!;

  renderEl(el: HTMLElement) {
    this.rootEl.appendChild(el);
  }
}

export default View;
