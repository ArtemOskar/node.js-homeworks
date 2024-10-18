import dataFileManager from "../utils/DataFileManager.mjs";
class Car {
  static readCarsList() {
    try {
      return dataFileManager.loadData();
    } catch (error) {
      throw new Error("Не удалось загрузить список участников");
    }
  }

  static addNewCar(carObj) {
    try {
      dataFileManager.addItem({
        id: new Date().getTime(),
        ...carObj,
      });
    } catch (error) {
      throw new Error("Данные не пришли");
    }
  }

  static getCarById(id) {
    try {
      return dataFileManager.getItemById(id);
    } catch (error) {
      throw new Error("Машина с данным id не найдена");
    }
  }

  static updateDataCar(id, carData) {
    try {
      dataFileManager.updateItemById(id, carData);
    } catch (error) {
      throw new Error("Машина с данным id не найдена");
    }
  }

  static deleteCarById(id) {
    try {
      dataFileManager.deleteItemById(id);
    } catch (error) {
      throw new Error("Машина с данным id не найдена");
    }
  }
}

export default Car;
