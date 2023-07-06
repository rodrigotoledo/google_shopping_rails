import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button" ]

  handleClick() {
    const originalHTML = this.buttonTarget.innerHTML;

    this.buttonTarget.innerHTML = 'Searching...';

    setTimeout(() => {
      this.buttonTarget.innerHTML = originalHTML;
    }, 2000);
  }
}
