import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCardTemplate)
    setHTML('houseCards', content)
}

function _drawHouseForm() {
    if (!AppState.account) {
        return
    }
    setHTML('houseForm', House.HouseFormTemplate)
}



export class HousesController {
    constructor() {
        // Pop.success("controller is swag")
        // _drawHouses()
        this.getHouses()
        _drawHouseForm()

        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
        AppState.on('account', _drawHouseForm)
    }


    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async createHouse(event) {
        try {
            event.preventDefault()
            // console.log("form submitted");
            const form = event.target
            const houseFormData = getFormData(form)
            // console.log(houseFormData);
            await housesService.createHouse(houseFormData)
            Pop.success('House made')

            form.reset()

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async removeHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm('<img class="img-fluid" src="https://media0.giphy.com/media/bjB3gtFvREqqr5NAHW/200w.webp?cid=ecf05e47pls7qjhpv2o4z2po09yz0gy4fek4uysbn0vpvno1&ep=v1_gifs_search&rid=200w.webp&ct=g">')
            if (!wantsToDelete) {
                return
            }

            await housesService.removeHouse(houseId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}