export class Weapon {
  constructor(name, value, modifierProperty, modifierValue) {
    this.name = name;
    this.value = value;
    this.modifierProperty = modifierProperty;
    this.modifierValue = modifierValue;  
  }
}



//   addToInventory(item) {
//     if (this.inventory.length >= 5) {
//       return "too much stuff";
//     } else {
//       this.inventory.push(item);
//     }
//   }

//   removeItem(item) {
//     let index = this.inventory.indexOf(item);
//     this.inventory.splice(index, 1);
//   }
// }