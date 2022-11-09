export class PlayerCreation {
  constructor(name, archetype) {
    this.playerName = name;
    this.archetype = archetype;
    this.baseStats = [];
    this.inventory = [];
  }
  // baseStats [focus, dexterity, vitality, intelligence, intimidation factor]
  initializeCharacter(archetype) { 
    if (archetype === "Goliath") {
      this.baseStats = [3, 5, 10, 3, 7];
      this.inventory = ["brass knuckles"];
    } else if (archetype === "Slasher") {
      this.baseStats = [7, 10, 5, 3, 3];
      this.inventory = ["chef knives"];
    } else if (archetype === "Mystic") {
      this.baseStats = [5, 3, 3, 10, 7];
      this.inventory = ["orb"];
    } else {
      this.baseStats = [5, 5, 3, 7, 10];
      this.inventory = ["glock"];
    } 
  }
  
  addToInventory(item) {
    if (this.inventory.length >=5) {
      return "too much stuff";
    } else {
      this.inventory.push(item);
    }
  }
}


