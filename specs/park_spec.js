const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function(){

  let tyrannosaurus;
  let pteradactyl;
  let dilophosaurus;
  let park;

  beforeEach(function(){
    tyrannosaurus = new Dinosaur("Tyrannosaurus", 3);
    pteradactyl = new Dinosaur("Pteradactyl", 1);
    dilophosaurus = new Dinosaur("Dilophosaurus", 2);
    park = new Park();
  })

  it('enclosure starts off empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can add dino to enclosure', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('can clear all dinos', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(tyrannosaurus);
    park.removeAllDinos();
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can remove all tyrannosaurus dinos', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(pteradactyl);
    park.removeAllDinosByType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 1);
    assert.deepEqual(park.enclosure, [pteradactyl]);
  })

  it('can get all dinos offspring rate above 2', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(pteradactyl);
    let dinoHighOffSpringRate = [tyrannosaurus, tyrannosaurus];
    assert.deepEqual(park.findAllDinosOffspringRateAboveTwo(), dinoHighOffSpringRate);
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });






})
