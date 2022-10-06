const { IronDoorFactory,WoodenDoorFactory } = require('../../src/abstractFactory/doorFactoryClass');
const { IronDoorFactoryM, WoodenDoorFactoryM } = require('../../src/abstractFactory/doorFactoryModule');

describe("abstract factory tests", () => { 
  test('abstract factory class', () => {
    const ironFactory = new IronDoorFactory();
    const woodenFactory = new WoodenDoorFactory();
    expect(ironFactory.makeDoor().getDescription()).toBe('I am a wooden door')
    expect(ironFactory.makeFittingExpert().getDescription()).toBe('I am an iron door')
    expect(woodenFactory.makeDoor().getDescription()).toBe('I can only fit iron doors')
    expect(woodenFactory.makeFittingExpert().getDescription()).toBe('I can only fit wooden doors')
  });
  test('abstract factory module', () => {
    const ironFactoryM = IronDoorFactoryM();
    const woodenFactoryM = WoodenDoorFactoryM();
    expect(ironFactoryM.makeDoor.getDescription()).toBe('I am a wooden door')
    expect(ironFactoryM.makeFittingExpert.getDescription()).toBe('I am an iron door')
    expect(woodenFactoryM.makeDoor.getDescription()).toBe('I can only fit iron doors')
    expect(woodenFactoryM.makeFittingExpert.getDescription()).toBe('I can only fit wooden doors')
  }); 
})