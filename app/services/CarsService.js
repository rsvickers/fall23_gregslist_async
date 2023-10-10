import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    console.log('GOT CARS', res.data);
    const newCars = res.data.map(carPOJO => new Car(carPOJO))
    AppState.cars = newCars
  }
}

export const carsService = new CarsService()