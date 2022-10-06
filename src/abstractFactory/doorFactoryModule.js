const woodenDoor = () => ({
  getDescription() {
    console.log('I am a wooden door')
  }
})

const ironDoor = () => ({
  getDescription() {
    console.log('I am an iron door')
  }
})

const welder = () => ({
  getDescription() {
    console.log('I can only fit iron doors')
  }
})

const carpenter = () => ({
  getDescription() {
    console.log('I can only fit wooden doors')
  }
})

const WoodenDoorFactory = () => ({
  'makeDoor': (() => woodenDoor())(),
  'makeFittingExpert': (() => carpenter())(), 
})


const IronDoorFactory = () => ({
  'makeDoor': (() => ironDoor())(),
  'makeFittingExpert': (() => welder())()
})

module.exports = {
  WoodenDoorM: woodenDoor,
  IronDoorM: ironDoor,
  WelderM: welder,
  CarpenterM: carpenter,
  WoodenDoorFactoryM: WoodenDoorFactory,
  IronDoorFactorM: IronDoorFactory
}