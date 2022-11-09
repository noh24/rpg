export default class PlayerCreation {
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
    } else if (archetype === "Slasher") {
      this.baseStats = [7, 10, 5, 3, 3];
    } else if (archetype === "Mystic") {
      this.baseStats = [5, 3, 3, 10, 7];
    } else {
      this.baseStats = [5, 5, 3, 7, 10];
    } 
  }
}
