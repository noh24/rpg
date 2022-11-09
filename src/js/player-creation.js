export class PlayerCreation {
  constructor(name, archetype) {
    this.playerName = name;
    this.archetype = archetype;
    this.baseStats = [];
  }
  // baseStats [focus, dexterity, vitality, intelligence, intimidation factor]
  assignBaseStats(archetype) {
    if (archetype === "Goliath") {
      this.baseStats = [3, 5, 7, 3, 10];
    } else if (archetype === "Slasher") {
      this.baseStats = [7, 10, 5, 3, 3];
    } else if (archetype === "Mystic") {
      this.baseStats = [5, 3, 3, 10, 7];
    } else {
      this.baseStats = [5, 5, 3, 7, 10];
    } 
  }
}