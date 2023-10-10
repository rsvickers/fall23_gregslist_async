export class Car {
  constructor (data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    // this.creatorName = data.creator.name
    this.creator = data.creator
  }

  get CarCardTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="bg-light border border-dark border-2 rounded shadow d-flex">
        <img class="rounded-start car-img"
          src="${this.imgUrl}"
          alt="${this.make} ${this.model}">
        <div class="p-3">
          <h2>${this.year} ${this.make} ${this.model}</h2>
          <p>Listed on: ${this.createdAt.toLocaleDateString()},
           Last updated: ${this.updatedAt.toLocaleDateString()}</p>
          <h3>$${this.price}</h3>
          <p>${this.description}</p>
          <p>Engine type: ${this.engineType}</p>
          <div class="d-flex align-items-center">
            <img class="img-fluid rounded-circle car-creator"
              src="${this.creator.picture}"
              alt="${this.creator.name}">
            <h4 class="ms-2">${this.creator.name}</h4>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

const carData = {
  "id": "6462ed1266d4560e6cfa0f39",
  "_id": "6462ed1266d4560e6cfa0f39",
  "make": "Honda",
  "model": "Accord",
  "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
  "year": 2022,
  "price": 1500,
  "description": "zoom zoom",
  "engineType": "unknown",
  "creatorId": "63f7d6202d1cf882287f12e2",
  "createdAt": "2023-05-16T02:40:18.318Z",
  "updatedAt": "2023-05-16T02:40:18.318Z",
  // "__v": 0,
  "creator": {
    "_id": "63f7d6202d1cf882287f12e2",
    "name": "Charles Francis Xavier",
    "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
    "id": "63f7d6202d1cf882287f12e2"
  },
}