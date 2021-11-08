class ToysGridComponent {
  constructor() {
    this.state = {
      toys: [],
      loading: true,
    };
    this.htmlElement = document.createElement("div");
    this.init();
  }
  fetchToy = () => {
    API.getToys(this.saveToys, this.showError);
  };

  saveToys = (toys) => {
    this.state.loading = false;
    this.state.toys = toys;
    this.render();
  };

  showError = (error) => {
    console.error(error);
    this.state.loading = false;
  };

  init = () => {
    this.fetchToy();
    this.render();
  };

  render = () => {
    if (this.state.loading) {
      this.htmlElement.innerHTML = '<img src="assets/loading.gif">';
    } else {
      this.htmlElement.innerHTML = "";
      const cardComponents = this.state.toys.map(
        ({ id, ...cardProps }) =>
          new ToyCardComponent({
            ...cardProps,
          })
      );
      const cardElements = cardComponents.map((componenent) => componenent.htmlElement);
      this.htmlElement.append(...cardElements);
    }
  };
}
