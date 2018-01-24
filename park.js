const Dinosaur = require('./dinosaur');

const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeAllDinos = function(){
  this.enclosure = [];
}

Park.prototype.removeAllDinosByType = function(type){
  let dinoTypeArray = this.enclosure.filter(dino => dino.type !== type);
  this.enclosure = dinoTypeArray;
}

Park.prototype.findAllDinosOffspringRateAboveAmount = function(amount){
  return this.enclosure.filter(dino => dino.offspringRate > amount);
}

Park.prototype.calculateDinosaurs = function(years){
  let total = 0;
  for(let dino of this.enclosure){
    dinoTotal = (dino.offspringRate + 1) ** years;
    total += dinoTotal;
  }
  return total;
}












module.exports = Park
