class View {
  rootEl: HTMLElement = document.querySelector("#app")!;

  static onKeyDown(onKeyDown: (e: KeyboardEvent) => void): void {
    document.addEventListener("keydown", onKeyDown);
  }

  renderEl(element: HTMLElement | string) {
    if (typeof element === "string") {
      this.rootEl.insertAdjacentHTML("beforeend", element);
    } else {
      this.rootEl.appendChild(element);
    }
  }
}

export default View;
