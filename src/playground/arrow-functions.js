// arguments object = no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments);
  return a + b
}
console.log(add(1, 2)) //arguments is not defined

// this keyword = no longer bound
const user = {
  name: 'Alin',
  cities: ['London', 'Delhi', 'Sydney'],

  printPlacesLived() {
    return this.cities.map(
      (city, index) => this.name + ' has lived in ' + city + '!'
    )
  },
}

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((n) => n * this.multiplyBy)
  },
}

console.log(user.printPlacesLived())
console.log(multiplier.multiply())
