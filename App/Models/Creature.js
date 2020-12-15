class Creature {
  constructor(
    name = '',
    food = '',
    universe = '',
    species = '',
    image = '',

  ) {
    this.name = name;
    this.food = food;
    this.universe = universe;
    this.species = species;
    this.species = image;
  }
  feed(food) {
    console.log(`I hunger for the ${food}. I require it for my existence.`)
  }
  speak(deepspeech) {
    alert(`The ${this.constructor.name} says ${deepspeech}!`)
  }
}

export default Creature;