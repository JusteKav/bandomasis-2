class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");

    this.init();
  }

  ageRestrict = () => {
    if (this.props.ageRestrictions.from !== null) {
      return `<span>from ${this.props.ageRestrictions.from} years</span>`;
    } else {
      return "there is no age restrictions for this toy";
    }
  };

  init = () => {
    const { id, title, price, discount, deleteCard } = this.props;
    this.htmlElement.className = "card p-3 shadow-sm m-2";
    this.htmlElement.innerHTML = `
    <h2 class="h4">${title}</h2>
    <h3 class="h5 text-muted">${price.amount} ${price.currency}</h3>
    <ul>
        <li>
            <strong>Age resrictions</strong>:
            ${this.ageRestrict()}
        </li>
        <li>
            <strong>Discount</strong>:
            <span>${discount.amount} (${discount.type})</span>
        </li>
    </ul>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-3 me-3">✕</button>
    `;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", deleteCard);
  };
}
