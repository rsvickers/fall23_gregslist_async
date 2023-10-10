import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
        this.year = data.year
    }

    get HouseCardTemplate() {
        return `
        <div class="col-5 mb-4 p-5 box">
        <p>Created: ${this.createdAt.toLocaleString()} Updated: ${this.updatedAt.toLocaleString()}</p>
        <div class="d-flex bg-light border border-dark shadow">
          <img class="houseImg"
            src="${this.imgUrl}"
            alt="🏠">
        </div>
        <div class="p-4">
          <h2>Price: $${this.price}</h2>
          <h4>${this.year}</h4>
          <p>${this.bedrooms} Beds, ${this.bathrooms} Bath, ${this.levels} level House</p>
          <p>${this.description}</p>
        </div>
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded-circle car-creator" src="${this.creator.picture}"
            alt="${this.creator.name}">
          <h4 class="ms-2">${this.creator.name}</h4>
        </div>
        <div class="text-end">
          ${this.ComputeDeleteButton}
        </div>
      </div>
        `
    }

    get ComputeDeleteButton() {
        if (AppState.account?.id == this.creatorId) {
            return `<button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger" type="button" role="button">🗑️</button>`
        }
        return ''
    }

    static get HouseFormTemplate() {
        return `
        <div class="col-12 col-md-6 p-4 bg-dark">
        <form onsubmit="app.HousesController.createHouse(event)" class="text-light">
          <div>
            <label for="price">Price</label>
            <input id="price" type="number" required min="10" max="25000000" placeholder="💰" name="price">

            <label for="year">Year</label>
            <input id="year" type="number" required min="1500" max="2024" placeholder="House Year" name="year">

            <label for="bedrooms">Bedrooms</label>
            <input id="bedrooms" type="number" required min="0" max="25" placeholder="🛏️" name="bedrooms">

            <label for="bathrooms">Bathrooms</label>
            <input id="bathrooms" type="number" required min="0" max="25" placeholder="🚽" name="bathrooms">

            <label for="levels">Levels</label>
            <input id="levels" type="number" required min="0" max="25" placeholder="Levels..." name="levels">


            <label for="imgUrl">Image URL</label>
            <input id="imgUrl" type="url" required minlength="0" maxlength="500" placeholder="📸" name="imgUrl">

            <label for="description">Description</label>
            <textarea name="description" id="description" cols="75" rows="5" placeholder="This house is nice..."
              maxlength="5000"></textarea>

            <div>
              <button class="btn btn-secondary" type="submit">Submit 🏠</button>
            </div>
          </div>
        </form>
      </div>
        `
    }

}




