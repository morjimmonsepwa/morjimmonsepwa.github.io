class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Monserrat Morales Jimenez`;
  }
}
customElements.define("mi-footer", MiFooter);
