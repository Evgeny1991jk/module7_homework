function Unit(name, color) {
    this.brand = 'Bosch',
    this.name = name,
    this.color = color
  }
  
  Unit.prototype.getPower = function(power) {
      console.log (`This case using ${power} vatt`)
    }
  
  function WaterUsingUnit(name, usability) {
    this.name = name,
    this.usability = usability
  }
  
  WaterUsingUnit.prototype = new Unit()
  
  const kettle = new WaterUsingUnit('kettle', 'friendly');
  
  const toster = new Unit('toster', 'white');
  
  const coffeeMachine = new WaterUsingUnit('coffeeMachine', 'pretty friendly');
  
  kettle.getPower(115)
  
  console.log(kettle)
  
  toster.getPower(55)
  
  console.log(toster)
  
  coffeeMachine.getPower(80)
  
  console.log(coffeeMachine)
