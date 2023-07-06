import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "results", "icon", "list" ]

  // search() {
  //   const url = this.inputTarget.dataset.url;
  //   fetch(`${url}?query=${this.inputTarget.value}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.resultsTarget.innerHTML = data.map(item => `<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">${item}</a>`).join('')
  //     });
  // }


  search() {
    const url = this.inputTarget.dataset.url;
    const query = this.inputTarget.value.trim();

    if (query === '') {
      this.hideResults();
      return;
    }

    fetch(`${url}?query=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.hideResults();
        } else {
          this.showResults(data);
        }
      });
  }

  hideResults() {
    this.resultsTarget.innerHTML = '';
    this.resultsTarget.classList.add('hidden');
  }

  showResults(data) {
    const items = data.map(item => `<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">${item}</a>`).join('');
    this.resultsTarget.innerHTML = items;
    this.resultsTarget.classList.remove('hidden');
  }


  toggleList() {
    const listIsVisible = this.listTarget.style.display === "block";
    this.listTarget.style.display = listIsVisible ? "none" : "block";
    this.iconTarget.innerHTML = listIsVisible ? this.iconTarget.dataset.upIcon : this.iconTarget.dataset.downIcon;
  }
}
