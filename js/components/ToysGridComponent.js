class ToysGridComponent {
  constructor() {
    this.state = {
      toys: [],
    };
    this.htmlElement = document.createElement("div");
    this.init();
  }
  fetchToy = () => {
    API.getToys(this.saveToys, this.showError);
  };

  saveToys = (toys) => {
    this.state.toys = toys;
  };

  showError = (error) => console.error(error);

  init = () => {
    this.fetchToy();
  };
}
