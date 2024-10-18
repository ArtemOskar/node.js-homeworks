import Cars from "../models/Cars.mjs";
class MainController {
  static homePage(req, res) {
    res.render("index", { title: "Expres" });
  }

  static listCarsPage(req, res) {
    const carsList = Cars.readCarsList();

    res.render("listCars", { cars: carsList });
  }

  static registrationForm(req, res) {
    res.render("registrationForm", { title: "registrationForm" });
  }
}

export default MainController;
