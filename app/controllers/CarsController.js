import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let content = ''
  cars.forEach(car => content += car.CarCardTemplate)
  setHTML('carCards', content)
}

export class CarsController {
  constructor () {
    console.log('cars controller loaded');
    this.getCars()

    AppState.on('cars', _drawCars)
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}