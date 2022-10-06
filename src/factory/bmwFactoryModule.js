const Bmw = (model, price, maxSpeed) => ({
  model,
  price,
  maxSpeed,
});

const bmwFactory = {
  "X5": (() => Bmw("X5", 100000, 300))(),
  "X6": (() => Bmw("X6", 120000, 320))(),
}

module.exports = { bmwFactory, Bmw };