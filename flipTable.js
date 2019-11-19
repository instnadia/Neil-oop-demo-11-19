/**
 * Make a table with table legs as nested classes and a person who can flip the table over
 * https://i.kym-cdn.com/entries/icons/original/000/006/306/FlipTable.jpg
 */

class UnitOfMeasure {
  constructor(unit, amnt) {
    this.unit = unit;
    this.amnt = amnt;
  }
}

class TableLeg {
  constructor(color, primarymaterial, shape) {
    this.color = color;
    this.primarymaterial = primarymaterial;
    this.shape = shape;
    this.isBroken = false;
  }
}

class Table {
  constructor(
    color,
    primaryMaterial,
    tableTopShape,
    width,
    height,
    length,
    legs
  ) {
    this.color = color;
    this.primaryMaterial = primaryMaterial;
    this.tableTopShape = tableTopShape;
    this.width = width;
    this.height = height;
    this.length = length;
    this.legs = legs;
    this.isFlipped = false;
    this.isAssembled = false;
    this.isBroken = false;
  }
  flip(flippersName) {
    this.isFlipped = true;
    console.log('table flipped by ' + flippersName);
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
  flipTable(tableToBeFlipped) {
    tableToBeFlipped.flip(this.name);
  }
}

var dojoTable = new Table(
  'white',
  'cardboard',
  'rectangular',
  new UnitOfMeasure('ft', 3),
  new UnitOfMeasure('in', 5),
  new UnitOfMeasure('ft', 5),
  [
    new TableLeg('white', 'metal', 'exceptionally tubular'),
    new TableLeg('white', 'metal', 'exceptionally tubular'),
    new TableLeg('white', 'metal', 'exceptionally tubular'),
    new TableLeg('white', 'metal', 'exceptionally tubular'),
  ]
);
var arsalan = new Person('Arsalan');

console.log(dojoTable);
console.log(dojoTable.isFlipped);
arsalan.flipTable(dojoTable);
console.log(dojoTable.isFlipped);
