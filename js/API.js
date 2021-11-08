const urlBase = "http://localhost:3000";

class API {
  static getToys = (resolve, reject) => {
    setTimeout(() => {
      fetch(urlBase + "/toys")
        .then((data) => data.json())
        .then(resolve)
        .catch(reject);
    }, 1000);
  };

  static deleteToys = (id, resolve, reject) => {
    fetch(urlBase + "/toys" + "/" + id, { method: "DELETE" })
      .then((data) => data.json())
      .then(resolve)
      .catch(reject);
  };
}

// API.getToys(
//   (duomenys) => console.log("Gauti duomenys: ", duomenys),
//   (klaida) => console.error("Kode yra klaida: ", klaida)
// );

// API.deleteToys(
//   "2",
//   (duomenys) => console.log("Gauti duomenys: ", duomenys),
//   (klaida) => console.error("Kode yra klaida: ", klaida)
// );
