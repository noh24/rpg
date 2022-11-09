
// playercharacter parent object
// properties: archetype (child object) whatever archetype chosen gives base stats
// property: stat bonuses (from gear, level up, talents, whatever)
// 

// attach to playercharacter object
export class PlayerCreation {
  constructor(name, archetype) {
    this.playerName = name;
    this.archetype = archetype;
    this.baseStats = [];
  }

  assignBaseStats(archetype) {
    if (archetype === "Goliath") {
      this.baseStats = [3, 5, 7, 3, 10];
    } else {
      this.baseStats = [0, 0, 0, 0, 0];
    }
  }
}



// generate an architype
// generate all arcetypes
// stat bonuses

// 4 monster archetypes
//generate stat number
    //low -3
    //medium - 5
    //high - 7
    //expert - 10
  //stats
    // focus
    // intelligence
    // dexterity
    // vitality
    // intimidation factor
  // fighter: slasher
    // focus - high
    // dexterity - expert
    // vitality - medium
    // intelligence - low
    // intimidation factor low
  // tanky: goliath
    // focus - low
    // dexterity - medium
    // vitality - expert
    // intelligence - low
    // intimidation factor - high
  // magic  - necromancer
    // focus - medium
    // dexterity - low
    // vitality - low
    // intelligence - expert
    // intimidation factor - high
  // technological - Einstein
    // focus - medium
    // dexterity - medium
    // vitality - low
    // intelligence - high
    // intimidation factor - expert