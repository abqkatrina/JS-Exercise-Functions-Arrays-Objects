// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 *
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 *
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 *
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 *
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  const person = {
    id: 1,
    name: 'Luke',
    email: 'luke@luke.com'
  };
  return(person);
};

makePersonObject(5, 'Leia', 'leia@leia.com');

/**
 * ### Challenge `getName`
 *
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 *
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/

const person = {
  id: 1,
  name: 'Luke',
  email: 'luke@luke.com'
};

function getName(id, name, email) {

  return('Hello, my name is ' + person.name);
}

getName(person);

/**
 * ### Challenge `makeSmartPerson`
 *
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(name) {
  const smartPerson = {
    name: 'Sam',
    sum: function sum(a,b){return(a+b);},
    speak: function speak(name){return('Hello, my name is ' + smartPerson.name);}
  };
  return(smartPerson);
}

makeSmartPerson('K');





/*
// ⭐️ Example Test Data ⭐️
var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
  * ### Example Array Challenge:
  *
  * @instructions
  * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
  *
  *
  * NOTE: This example has been completed for you.
**/
function get3rdCar(inventory) {
  const the3rd = inventory.find((item, index) => {
    return index === 2 // we use 2 because index is zero-based.
  })
  return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
}

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`*/
 var inventory = [  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
  { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
  { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
  { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
  { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
  { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
  { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
  { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
  { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
  { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
  { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
  { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
  { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
  { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
  { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
  { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
  { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
  { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
  { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
  { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
  { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
  { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
  { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
  { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
  { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
  { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
  { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
  { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
  { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
];
//  * @instructions
//  * getCarInfoByIndex takes two arguments:
//  *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
//  *     (2) a number which is the desired index in the array.
//  * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
//  *
//  * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
//  * it will return `This is a Lincoln Navigator`.
// */
function getCarInfoByIndex(inv, i) {
  const make = (inv[i].car_make);
  const model = (inv[i].car_model);
  const makeModel = make + model;
  return('This is a ' + makeModel);

}
getCarInfoByIndex(inventory, 3);
/**
 * ### Challenge `getLastCarInfo`
 *
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 *
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(inv) {
  const lastMake = inv[inv.length-1].car_make;
  const lastMod = inv[inv.length-1].car_model;
  const lastInfo = lastMake + lastMod;
  return('This is a ' + lastInfo);
}
getLastCarInfo(inventory);
/**
 * ### Challenge `getCarInfoById`
 *
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 *
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
 **/
// let obj = objArray.find(obj => obj.id == 3);
function getCarInfoById(inv, num) {
      for (var i = 0; i < inv.length; i++) {
          if (inv[i].id === num) {
            const idMake = inv[i].car_make;
            const idMod = inv[i].car_model;
            const idInfo = idMake + idMod;
            return('This is a ' + idInfo);
          }
        }
      }
getCarInfoById(inventory, 1);

/**
 * ### Challenge `sortCarInventory`
 *
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
function sortCarInventory(inv) {
  const sortInfo = inv[i].car_model;
  const sortInv = [inv.sort()];
  return(sortInv);
}

sortCarInventory(inventory);
/**
 * ### Challenge `getModelYears`
 *
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(inv) {
  const carYear = [];

}

/**
 * ### Challenge `getOlderCars`
 *
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(/* code here */) {
  /* code here */
}

/**
 * ### Challenge `getGermanCars`
 *
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(/* code here */) {
  /* code here */
}

/**
 * ### Challenge refactor to arrow functions
 *
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 *
 * const sum = function (a, b) {
 *   return a + b
 * }
 *
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
const sum = null; // code here!
const addFive = null; // code here!
const argTimesTwo = null; // code here!

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 *
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(/* code here */) {
  /* code here */
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
