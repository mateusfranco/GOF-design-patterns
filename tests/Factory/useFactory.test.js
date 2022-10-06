
const { Bmw, bmwFactory } = require("../../src/factory/bmwFactoryClass");
const { Bmw: BmwM, bmwFactory: bmwFactoryM } = require("../../src/factory/bmwFactoryModule");

describe("factory pattern tests", () => {
  test("factory class", () => {
    const bmw_x5 = bmwFactory("X5");
    const bmw_x6 = bmwFactory("X6");
    const obj_x5 = new Bmw('X5', 100000, 300);
    const obj_x6 = new Bmw('X6', 120000, 320);
    expect(bmw_x5).toStrictEqual(obj_x5);
    expect(bmw_x6).toStrictEqual(obj_x6);
  });

  test("factory module", () => {
    const bmw_x5 = bmwFactoryM["X5"];
    const bmw_x6 = bmwFactoryM["X6"];
    const obj_x5 = BmwM('X5', 100000, 300);
    const obj_x6 = BmwM('X6', 120000, 320);
    expect(bmw_x5).toStrictEqual(obj_x5);
    expect(bmw_x6).toStrictEqual(obj_x6);
  });
});