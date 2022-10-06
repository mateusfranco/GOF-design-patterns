const bmwFactory = (type) => {
  switch (type) {
    case "X5":
      return new Bmw(type, 100000, 300);
    case "X6":
      return new Bmw(type, 120000, 320);
  }
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

module.exports = { bmwFactory, Bmw };