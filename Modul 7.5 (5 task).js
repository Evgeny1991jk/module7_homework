class Unit {
    constructor(unitName) {
      this.unitName = unitName || 'toster';
      this.hasColor = true;
    }
    
    getInfo() {
      return `This unit is ` + this.unitName;
    }
  }
  
  class WaterUsingUnit extends Unit {
    constructor(isBlack, name, unitName) {
      super(unitName);
      this.isBlack = isBlack;
      this.name = isBlack ? name : unitName;
    }
    
    getInfo(){
      if (this.isBlack) {
        return 'This unit ' + this.name + ' is black'
      } else {
        return super.getInfo()
      }
    }
  }
  
  const toster = new Unit(false, 'Toster');
  
  console.log(toster.getInfo())
  
  console.log(toster instanceof WaterUsingUnit)
  
  const kettle = new WaterUsingUnit(true, 'Kettle');
  
  console.log(kettle.getInfo())
  
  console.log(kettle instanceof WaterUsingUnit)
